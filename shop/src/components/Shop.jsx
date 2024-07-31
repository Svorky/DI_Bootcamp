import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        all();
    }, []);

    const all = async () => {
        try {
            const res = await fetch('http://localhost:5000/api/products');
            const data = await res.json();
            setProducts(data);
        } catch(error) {
            console.error(error);
        }
    };

    const submitProduct = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        console.log(data)

        const res = await fetch('http://localhost:5000/api/products', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const json = await res.json()
        setProducts(json)
    };

    return (<>
        <h2>Shop</h2>
        <h2>Add product</h2>
        <form onSubmit={submitProduct}>
            <input type="text" name='name' placeholder='name' />
            <input type="text" name="price" id="" placeholder='Price' />
            <input type="submit" value="Submit" />
        </form>
        { products &&
            products.map(item => {
                return (
                    <div key={ item.id }>
                        <h2>{ item.name }</h2>
                        <h4>{ item.price }</h4>
                        <Link to={ `/product/${item.id}` }><button>Buy</button></Link>
                    </div>
                );
            })
        }
    </>);
};

export default Shop;