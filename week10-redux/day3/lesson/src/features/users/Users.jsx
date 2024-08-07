import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, addPrepare, initUsers, fetchUsers } from './usersSlice.js';
import { useRef } from 'react';
import { Fragment } from 'react';
import { useEffect } from 'react';

const Users = () => {
    const users = useSelector(
        state => state.users.users
    );
    const status = useSelector(
        state => state.users.status
    )
    const dispatch = useDispatch();

    const nameRef = useRef();
    const emailRef = useRef();

    useEffect(()=>{
        // fetchUsers()
        dispatch(fetchUsers())
    },[])

    // const fetchUsers = async () => {
    //     try {
    //         const response = await fetch('https://jsonplaceholder.typicode.com/users');
    //         const users = await response.json();
    //         dispatch(initUsers(users))
    //     } catch(error) {
    //         console.error(error)
    //     }
    // };

    const addUser = () => {
        const id = users.length;
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        dispatch(add({ id, name, email }));
    };
    const addUserPrepare = () => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        dispatch(addPrepare(name, email));
    };

    if(status === 'pending') return <h2>Loading...</h2>

    return (<>
        <div>Users</div>
        <div>
            <input ref={ nameRef } type="text" placeholder='name' />
            <input ref={ emailRef } type="text" placeholder='email' />
            <button onClick={ addUser }>Add user</button>
            <button onClick={ addUserPrepare }>Add user Prepare</button>
        </div>
        <div style={ {
            display: 'grid', gridTemplateColumns: 'auto auto', justifyContent: 'center',
            justifyItems: 'start'
        } }>
            {
                users.map(
                    user => {
                        return <Fragment key={ user.id }>
                            <span style={ { padding: '5px' } }>{ user.name }</span>
                            <span style={ { padding: '5px' } }>{ user.email }</span>
                        </Fragment>;
                    }
                )
            }
        </div>
    </>
    );
};

export default Users;