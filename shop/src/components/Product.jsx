import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Product = (props) => {
    const params = useParams()
    const [product, setProduct] = useState({})

    useEffect(()=>{
        getProduct()
    })

    const getProduct = async() => {
        const res = await fetch(`http://localhost:5000/api/products/${params.id}`)
        const data = await res.json()
        setProduct(data[0])
    }
  return (<>
    <h2>Product {product.name}</h2>
    <h4>{product.price}</h4>
    </>)
}

export default Product