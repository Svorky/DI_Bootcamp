import React from 'react'
import { useTheme } from '../ThemeContext.jsx';

const Article = () => {
    const {theme} = useTheme()
    return (
    <div className={theme}>
        <h1>Article</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit quidem laudantium accusantium veritatis ipsam? Placeat veniam, cupiditate dolore natus quae recusandae perspiciatis saepe tempora dicta, reprehenderit esse pariatur aut animi!</p>
    </div>
  )
}

export default Article