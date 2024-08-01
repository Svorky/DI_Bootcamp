import React from 'react'

const Image = (props) => {
    const {src, alt} = props
  return (
    <>
        <img src={src.tiny} alt={alt} />
    </>
  )
}

export default Image