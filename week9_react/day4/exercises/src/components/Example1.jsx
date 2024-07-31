import React from 'react';
import data from './data.json';
import { Link } from 'react-router-dom';

const Example1 = () => {
    return (
        <ul>
            {
                data && data["SocialMedias"].map(
                    link => <li key={ link }><Link to={ link }>{ link }</Link></li>
                )
            }
        </ul>
    );
};

export default Example1;