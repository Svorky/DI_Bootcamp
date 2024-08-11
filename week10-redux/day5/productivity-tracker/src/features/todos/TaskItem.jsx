import { useDispatch } from 'react-redux';
import { changeStatus, deleteTask, editTask } from './slice.js';
import { useEffect, useRef, useState } from 'react';

const TaskItem = (props) => {
    const { id, task, done, category } = props;
    const taskRef = useRef()
    const [edit, setEdit] = useState(false)

    const dispatch = useDispatch()

    useEffect(()=>{
        if(taskRef.current){
            taskRef.current.value = task
        }
    }, [])

    const handleChange = () => {
        dispatch(changeStatus(id))
    }

    const handleDelete = () => {
        dispatch(deleteTask(id))
    }

    const handleEdit = () => {
        if(edit){
            const newValue = taskRef.current.value
            dispatch(editTask({id, newValue}))
        }
        setEdit(prev => !prev)
    }
// console.log(category)
    return (
        <div className='task'>
            <input type="checkbox" checked={ done } onChange={handleChange} className='checkbox' />
            <input ref={taskRef} type='text' className={edit ? 'enabled' : 'disabled'} readOnly={!edit} />
            <span>{category?.name}</span>
            <button onClick={handleEdit} >{edit ? 'Save' : 'Edit'}</button>
            <button onClick={handleDelete} >Delete</button>
        </div>
    );
};

export default TaskItem;