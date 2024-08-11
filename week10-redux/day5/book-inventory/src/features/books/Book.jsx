import React from 'react'

const Book = (props) => {
    const { title, author, genre } = props
  return (
    <div className='card'>
        <h2>{title}</h2>
        <p>by {author}</p>
        <p>{genre.join(", ")}</p>
    </div>
  )
}

export default Book