import React, { useContext } from 'react'
import { AppContext } from '../App.jsx';

const Title = () => {
    const {title} = useContext(AppContext)
  return (
    <div>Title {title}</div>
  )
}

export default Title