import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './usersSlice.js';
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

    useEffect(()=>{
        dispatch(fetchUsers())
    },[])

    if(status === 'pending') return <h2>Loading...</h2>

    if(status === 'failed') return <h2>Somethig goes wrong</h2>

    return (<>
        <h1>Users</h1>
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