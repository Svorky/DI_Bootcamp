import React, { useContext } from 'react';
import { AppContext } from '../App.jsx';
import Title from './Title.jsx';

const Button = () => {
    const { setCount } = useContext(AppContext);
    return (<>
        <button onClick={ () => setCount(prev => prev + 1) } >+</button>
        <Title />
        </>
    );
};

export default Button;