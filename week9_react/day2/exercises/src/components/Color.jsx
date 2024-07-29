import React, { useState, useEffect } from 'react'

const Color = () => {
    const [favoriteColor , setFavoriteColor ] = useState('red')
    
    useEffect(() => {
        alert('useEffect reached')
    }, []);

    const handleClick = (event) => {
        setFavoriteColor('blue')
    }

  return (<>
    <div>My favorite color is {favoriteColor}</div>
    <button onClick={handleClick}>Change color</button>
    </>
  )
}

export default Color;