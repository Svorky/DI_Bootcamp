import React from 'react'
import { addReaction } from '../features/posts/slice.js'
import {useDispatch} from 'react-redux'

const ReactionButton = (props) => {
    const { id, name, emoji, reaction } = props
    const dispatch = useDispatch()

  return (
    <button className='reactionButton'
    onClick={()=>dispatch(addReaction({id,name}))}>{emoji} {reaction}</button>
  )
}

export default ReactionButton