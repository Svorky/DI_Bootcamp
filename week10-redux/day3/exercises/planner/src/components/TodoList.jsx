import React from 'react'
import {useSelector} from 'react-redux'
import TodoItem from './TodoItem.jsx';

const TodoList = () => {
    const tasks = useSelector(
        state => state.tasks.tasks
    )
    const date = useSelector(
        state => state.tasks.date
    )
  return (
    <>
    {
        tasks
        .filter( task => task.date === date)
        .map(
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