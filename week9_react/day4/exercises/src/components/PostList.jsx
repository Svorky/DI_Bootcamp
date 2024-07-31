import React from 'react'
import posts from './posts.json'

const PostList = () => {
  return (
    <>
    <h1>Hi this is a title</h1>
    {
        posts && posts.map(
            post => {
                return(
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </div>
                )
            }
        )
    }
    </>
  )
}

export default PostList