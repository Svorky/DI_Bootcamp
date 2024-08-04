import React, { useContext } from 'react'
import { AppContext } from '../App.jsx';
import Input from './Input.jsx';

const ShowCounter = () => {
    const { count } = useContext(AppContext);

  return (<>
    <div>ShowCounter = {count}</div>
    <Input />
    </>
  )
}

export default ShowCounter