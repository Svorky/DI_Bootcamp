import React from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/tasks/tasksSlice.js';
const AddTodo = () => {

    const titleRef = useRef();
    const dispatch = useDispatch();

    const add = () => {
        dispatch(addTodo({title: titleRef.current.value}));
    };

    return (
        <>
            <input ref={ titleRef } type="text" placeholder='title' />
            <button onClick={ add }>Add</button>
        </>
    );
};

export default AddTodo;