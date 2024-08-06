import { useDispatch } from 'react-redux';
import { ADD_TASK } from "../redux/reducer.js";
import { useRef } from 'react';

const TaskCreate = (props) => {
  const dispatch = useDispatch();

  const dateRef = useRef();
  const taskRef = useRef();

  const createTask = () => {
    dispatch({ type: ADD_TASK, date: props.date, name: taskRef.current.value });
    taskRef.current.value = '';
  };

  return (
    <>
      <div>
        <input ref={ dateRef } type="date" name="" id="" onChange={ (e) => props.setDate(e.target.value) } />
        <input ref={ taskRef } type="text" name="name" placeholder="Task..." />
        <button onClick={ createTask }>Add</button>
      </div>
    </>
  );
};

export default TaskCreate;