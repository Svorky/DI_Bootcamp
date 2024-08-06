import { useState, useReducer, useRef, createContext } from "react";
import { v4 as uuid4 } from "uuid";
import TasksList from "./components/TasksList";
import "./App.css";

export const TasksContext = createContext();

export const initialState = {
  tasks: [],
};

/** Action constants */
export const ADD_TASK = "add_task";
export const REMOVE_TASK = "remove_task";

export const taskReducer = (state, action) => {
  if (action.type === ADD_TASK) {
    const newTasks = [...state.tasks];
    newTasks.push({ id: uuid4(), name: action.payload, active: true });
    return { ...state, tasks: newTasks };
  } else if (action.type === REMOVE_TASK) {
    const notDeletedTask = state.tasks.filter((item) => item.id !== action.id);
    return { ...state, tasks: notDeletedTask };
  }
  return state;

  //   switch (action.type) {
  //     case ADD_TASK:
  //       const newTasks = [...state.tasks];
  //       newTasks.push({ id: uuid4(), name: action.payload, active: true });
  //       return { ...state, tasks: newTasks };

  //     case REMOVE_TASK:
  //       const notDeletedTask = state.tasks.filter(
  //         (item) => item.id !== action.id
  //       );
  //       return { ...state, tasks: notDeletedTask };
  //     default:
  //       return state;
  //   }
};

function App() {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const inputRef = useRef();

  const addTask = () => {
    const value = inputRef.current.value;
    dispatch({ type: ADD_TASK, payload: value });
    inputRef.current.value = "";
  };

  // const removeTask = (id) => {
  //   dispatch({ type: REMOVE_TASK, id });
  // };

  return (
    <TasksContext.Provider value={{ dispatch, state }}>
      <div>
        <h2>Tasks Manager</h2>
        <input placeholder='Add Task...' ref={inputRef} />
        <button onClick={() => addTask()}>Add</button>
        <div>
          <h2>List of tasks</h2>
          <TasksList />
        </div>
      </div>
    </TasksContext.Provider>
  );
}

export default App;
