import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { add, addPrepare } from './usersSlice.js';
import { useRef } from 'react';

const Users = () => {
    const users = useSelector(
        state => state.users
    )
    const dispatch = useDispatch()

    const nameRef = useRef()
    const emailRef = useRef()

    const addUser = () => {
        const id = users.length
        const name = nameRef.current.value
        const email = emailRef.current.value
        dispatch(add({id, name, email}))
    }
    const addUserPrepare = () => {
        const name = nameRef.current.value
        const email = emailRef.current.value
        dispatch(addPrepare(name, email))
    }
  return (<>
    <div>Users</div>
    <div>
        <input ref={nameRef} type="text" placeholder='name' />
        <input ref={emailRef} type="text" placeholder='email'/>
        <button onClick={addUser}>Add user</button>
        <button onClick={addUserPrepare}>Add user Prepare</button>
    </div>
    {
        users.map(
            user => {
                return <div key={user.id}>
                <p>{user.name}</p>
                <p>{user.email}</p>
                </div>
            }
        )
    }
</>
  )
}

export default Users