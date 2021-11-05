import React, { createContext, useContext, useReducer, useEffect } from "react";
import { initialState, reducer } from "../reducer/DataReducer";
import axios from "axios";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async function () {
      const response = await axios.get("http://localhost:3001/todos");
      dispatch({ type: "INITIALIZE_DATA", payload: response.data });
    })();
  }, []);

  console.log(state.tasks);

  return (
    <DataContext.Provider value={{ state, dispatch, tasks: state.tasks }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
