import React from 'react'
import ReactionButton from './ReactionButton.jsx';
import { memo } from 'react';

const reactionEmoji = {
    thumbsUp: "👍",
    wow: "😮",
    heart: "❤️",
    rocket: "🚀",
    coffee: "☕",
  };

const Reactions = (props) => {
    const { postID, reactions } = props
  return (
    <div>
        {
            Object.entries(reactionEmoji).map(
                ([name, emoji]) => <ReactionButton key={name} emoji={emoji} name={name} reaction={reactions[name]} id={postID} />
            )
        }
    </div>
  )
}

export default memo(Reactions)