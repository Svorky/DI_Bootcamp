import { useState } from 'react';
import Garage from './Garage.jsx';

export default function Car(props) {
    const [color, setColor] = useState('black');
    return (
        <header>
            <Garage size='small' />
            This car is { color } { props.model }
        </header>
    );
}