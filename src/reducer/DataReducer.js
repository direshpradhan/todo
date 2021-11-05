export const initialState = {
  tasks: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE_DATA":
      return { ...state, tasks: action.payload };

    case "ADD_TASK":
      return { ...state, tasks: [action.payload, ...state.tasks] };

    case "TOGGLE_TASK_STATUS":
      const newData = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload;
        }
        return task;
      });
      return { ...state, tasks: newData };

    case "DELETE_TASK":
      return { ...state, tasks: action.payload };

    default:
      break;
  }
};
