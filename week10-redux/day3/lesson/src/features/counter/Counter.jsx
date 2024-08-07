import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {
    increment,
    decrement,
    reset,
    incrementByNum,
    delayIncrementThunk,
} from "./counterSlice.js";
import { useRef } from 'react';

const Counter = (props) => {
    const count = useSelector(
        state => state.counter.count
    )
    const dispatch = useDispatch()
    const numRef = useRef()

    const addNum = () => {
        const num = numRef.current.value
        dispatch(incrementByNum(Number(num)))
    }
    return (<>
        <div>Counter: {count}</div>
        <button onClick={() => dispatch(increment())}> + </button>
        <button onClick={() => dispatch(decrement())}> - </button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
        <div>
            <h2>by num</h2>
            <input ref={numRef} type="text" />
            <button onClick={addNum}>Add</button>
        </div>
        <div>
            <button onClick={()=> dispatch(delayIncrementThunk())}>Delay</button>
        </div>
    </>
    );
};

export default Counter;