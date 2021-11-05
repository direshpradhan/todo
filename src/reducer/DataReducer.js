export const initialState = {
  tasks: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE_DATA":
      return { ...state, tasks: action.payload };

    default:
      break;
  }
};
