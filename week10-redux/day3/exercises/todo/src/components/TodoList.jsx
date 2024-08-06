import React from 'react'
import {useSelector} from 'react-redux'
import TodoItem from './TodoItem.jsx';

const TodoList = () => {
    const tasks = useSelector(
        state => state.tasks.tasks
    )
  return (
    <>
    {
        tasks.map(
            task => {
                return(
                    <TodoItem key={ task.id } task={task}/>
                )
            }
        )
    }
    </>
  )
}

export default TodoList