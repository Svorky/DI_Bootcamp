import { useSelector, useDispatch } from "react-redux";
import {
  DELETE_TASK,
  COMPLITED_TASK,
  EDIT_TASK,
  TOGGLE_EDIT,
} from "../redux/reducer.js";
import { useRef } from "react";

const TasksList = (props) => {
  const tasks = useSelector((state) => state.plannerReducer.tasks);
  const dispatch = useDispatch();
  const nameEditRef = useRef("");

  const deleteTask = (e, id) => {
    dispatch({ type: DELETE_TASK, id });
  };

  const complitTask = (id) => {
    dispatch({ type: COMPLITED_TASK, id });
  };
  const saveEdit = (id, name) => {
    dispatch({ type: EDIT_TASK, id, name });
  };
  const toggleEdit = (id) => {
    dispatch({ type: TOGGLE_EDIT, id });
  };

  return (
    <>
      { tasks
        .filter((task) => task.date === props.date)
        .map((task) => {
          return (
            <div className='task' key={ task.id }>
              { task.toggleEdit ? (
                <>
                  <input
                    ref={ nameEditRef }
                    defaultValue={ task.name }
                  />
                  <button
                    onClick={ (e) =>
                      saveEdit(
                        task.id,
                        nameEditRef.current.value
                      )
                    }
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <h2
                    onClick={ (e) => complitTask(task.id) }
                    className={
                      task.isComplited ? "complited" : ""
                    }
                  >
                    { task.name }
                  </h2>
                  <button
                    onClick={ (e) => toggleEdit(task.id) }
                  >
                    Edit
                  </button>
                </>
              ) }
              <button onClick={ (e) => deleteTask(e, task.id) }>
                Delete
              </button>
            </div>
          );
        }) }
    </>
  );
};
export default TasksList;
