import { useState } from 'react';

const Events = () => {
    const [isToggleOn, setIsToggleOn ] = useState(true)
    const clickMe = () => {
        alert('I was clicked');
    };
    const handleKeyDown = (event) => {
        if(event.key === 'Enter'){
            alert(event.target.value)
        }
    }
    const toggle = (event) => {
        setIsToggleOn(!isToggleOn)
    }
    return (
        <>
            <button onClick={ clickMe }>Push me</button>
            <br />
            <input type="text" placeholder='Press the ENTER key!' onKeyDown={handleKeyDown} />
            <br />
            <button type="button" onClick={toggle}>{isToggleOn ? 'ON' : 'OFF'}</button>
        </>
    );
};

export default Events;