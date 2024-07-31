import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const Product = () => {
    const params = useParams();
    const navigate = useNavigate()

    const toShop = () => {
        navigate('/shop')
    }

  return (<>
    <h2>Product {params.id}</h2>
    <Link to='/shop'>Back to shop</Link>
    <div>
        <button onClick={()=>toShop()}>Navigate to shop</button>
    </div>
    </>
  )
}

export default Product