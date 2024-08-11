import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskItem from './TaskItem.jsx';
import { addTask, filterCategory, filterCompleted } from './slice.js';
import { addCategory } from '../categories/slice.js';
import { createSelector } from '@reduxjs/toolkit';

const TaskList = () => {
    const [selector, setSelector] = useState(true)
    // const tasksAll = useSelector(state => state.tasks.tasks);
    const categories = useSelector(state => state.categories);

    const selectTasksByCategory = useSelector(
        createSelector([(state => state.tasks.tasks), (state => state.tasks.category)], (tasks, category) => {
            if(category === '-1') return tasks;
            return tasks.filter((task) => task.category === category);
        })
    );

    const selectCompletedTasks = useSelector(
        createSelector([(state => state.tasks.tasks), (state => state.tasks.done)], (tasks, done) => {
            if(done === -1) return tasks;
            return tasks.filter((task) => task.done === Boolean(done));
        })
    );

    const dataToRender = selector ? selectTasksByCategory : selectCompletedTasks

    const dispatch = useDispatch();

    const titleRef = useRef();
    const categoryRef = useRef();

    const handleSubmit = () => {
        event.preventDefault();
        dispatch(addCategory({ name: categoryRef.current.value }));
        dispatch(addTask({ category: categoryRef.current.value, task: titleRef.current.value }));
        titleRef.current.value = '';
        categoryRef.current.value = '';
    };

    const handleCategories = (event) => {
        dispatch(filterCategory(event.target.value));
        setSelector(true)
    };

    const handleComplete = (event) => {
        dispatch(filterCompleted(Number(event.target.value)));
        setSelector(false)
    };

    return (
        <>
            <form onSubmit={ handleSubmit }>
                <input ref={ titleRef } type="text" placeholder='Title' />
                <input ref={ categoryRef } type="text"
                    list="categories"
                    placeholder='Select category or type new one'
                />
                <datalist id="categories" >
                    {
                        categories && categories.map(
                            category => <option key={ category.name } >{ category.name }</option>
                        )
                    }
                </datalist>
                <input type="submit" value="Add" />
            </form>
            <div className='filters'>
                <h3>Filters</h3>
                <select name="category" id="" onChange={(e)=> handleCategories(e) }>
                    <option value="-1">Select category</option>
                    {
                        categories && categories.map(
                            category => <option key={ category.name } value={category.name}>{ category.name }</option>
                        )
                    }
                </select>
                <select name="complete" id="" onChange={(e)=> handleComplete(e) }>
                    <option value="-1">All</option>
                    <option value="1">Completed</option>
                    <option value="0">Uncompleted</option>
                </select>
            </div>
            <section className='tasklist'>
                {
                    dataToRender && dataToRender.map(
                        task => 
                        {
                        return <TaskItem key={ task.id } { ...task } category={ categories.find(c => task.category === c.name) } />
                        }
                    )
                }
            </section>
        </>
    );
};

export default TaskList;