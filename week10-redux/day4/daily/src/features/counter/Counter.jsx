import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {
    ageUpAsync,
    ageDownAsync
} from "./counterSlice.js";

const Counter = (props) => {
    const count = useSelector(
        state => state.counter.count
    )
    const status = useSelector(
        state => state.counter.status
    )
    const dispatch = useDispatch()

    return (<>
        <div>Counter: {status === 'pending' ? <>Loading</> : count}</div>
        <div>
            <button onClick={()=> dispatch(ageUpAsync(1))}>Up</button>
            <button onClick={()=> dispatch(ageDownAsync(1))}>Down</button>
        </div>
    </>
    );
};

export default Counter;