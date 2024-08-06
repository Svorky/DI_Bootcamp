import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../features/tasks/tasksSlice.js';

const TodoItem = (props) => {
  const { task } = props;

  const dispatch = useDispatch();

  const complete = (id) => {
    dispatch(toggleTodo({ id }));
  };

  const remove = (id) => {
    dispatch(removeTodo({ id }));
  };

  return (
    <>
      <div className='tasklist'>
        <input type="checkbox"
          checked={ task.complete }
          onChange={ () => complete(task.id) }
          style={ task.complete ? { textDecoration: 'line-through' } : { textDecoration: 'none' } } />
        <h3>{ task.title }</h3>
        <button onClick={ () => remove(task.id) }>Delete</button>
      </div>
    </>
  );
};

export default TodoItem;