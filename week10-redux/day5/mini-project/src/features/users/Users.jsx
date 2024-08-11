import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { fetchUsers } from './usersSlice.js'
import { useEffect } from 'react';

const Users = () => {
    const users = useSelector(
        state => state.users
    )

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchUsers())
    },[])


  return (<>
    <h2>Users</h2>
    <select name="" id="">
        <option value="-1">Select author</option>
    {
        users && users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)
    }
    </select>
    </>
  )
}

export default Users