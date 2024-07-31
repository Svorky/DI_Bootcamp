import React from 'react';

const Exercise4 = () => {

    const webhook = async () => {
        const response = await fetch('https://webhook.site/e755207e-2238-48e3-83f5-dda57087add6', {
            method: "post",
            body: JSON.stringify({
                key1: 'myusername',
                email: 'mymail@gmail.com',
                name: 'Isaac',
                lastname: 'Doe',
                age: 27
            })
        });
        // const data = await response.json()
        console.log(response)
    };

    return (
        <button onClick={webhook}>Post data</button>
    );
};

export default Exercise4;