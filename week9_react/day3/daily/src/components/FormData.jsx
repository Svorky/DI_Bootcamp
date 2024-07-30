import React from 'react';
import { useState } from 'react';

const FormData = () => {
    const [userData, setUserData] = useState({});

    const handleChange = (event) => {
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        setUserData({ ...userData, [event.target.name]: value });
    };

    return (
        <main>
            <h1>Sample form</h1>
            <form className="inputForm">
                <input
                    className="text"
                    onChange={ handleChange }
                    name="firstName"
                    placeholder="First Name"
                    value={ userData.firstName }
                />
                <br />
                <input
                    className="text"
                    onChange={ handleChange }
                    name="lastName"
                    placeholder="Last Name"
                    value={ userData.lastName }
                />
                <br />
                <input
                    className="text"
                    onChange={ handleChange }
                    name="age"
                    placeholder="Age"
                    value={ userData.age }
                />
                <br />
                <br />
                <label>
                    <input
                        className="radiobutton"
                        type="radio"
                        name="gender"
                        value="male"
                        onChange={ handleChange }
                    />
                    Male
                </label>
                <label>
                    <br />
                    <input
                        className="radiobutton"
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={ handleChange }
                    />
                    Female
                </label>
                <br />
                <label className="destination-header">Select your destination</label>
                <br />
                <select
                    className="destination-input"
                    onChange={ handleChange }
                    name="destination"
                    value={ userData.destination }
                >
                    <option value="">-- Please Choose a destination --</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Japan">Japan</option>
                    <option value="Brazil">Brazil</option>
                </select>
                <br />
                <br />
                <label className="restrictions-title">Dietary restrictions:</label>
                <br />
                <div className="restrictions">
                    <input
                        type="checkbox"
                        name="nutsFree"
                        onChange={ handleChange }
                        checked={ userData.nutsFree }
                    />
                    <span>Nuts free</span>
                    <br />
                    <input
                        type="checkbox"
                        name="lactoseFree"
                        onChange={ handleChange }
                        checked={ userData.lactoseFree }
                    />
                    <span>Lactose free</span>
                    <br />
                    <input
                        type="checkbox"
                        name="isVegan"
                        onChange={ handleChange }
                        checked={ userData.isVegan }
                    />
                    <span>Vegan</span>
                </div>
                <button className="submit">Submit</button>
            </form>
            <hr />
            <div className="entered-info">
                <h2>Entered information:</h2>
                <p>
                    Your name: { userData.firstName } { userData.lastName }
                </p>
                <p>Your age: { userData.age }</p>
                <p>Your gender: { userData.gender }</p>
                <p>Your destination: { userData.destination }</p>
                <p>Your dietary restrictions: </p>
                <div className="restrictions">
                    <span>**Nuts free : { userData.nutsFree ? " Yes" : "No" }</span> <br />
                    <span>**Lactose free : { userData.lactoseFree ? " Yes" : "No" }</span>{ " " }
                    <br />
                    <span>**Vegan meal : { userData.isVegan ? " Yes" : "No" }</span>
                </div>
            </div>
        </main>
    );
};

export default FormData;