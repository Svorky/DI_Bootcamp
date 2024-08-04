import React, { useContext } from 'react'
import { AppContext } from '../App.jsx';

const Input = () => {
    const {setTitle} = useContext(AppContext)
  return (
    <input onChange={(e) => setTitle(e.target.value)}/>
  )
}

export default Input