import React from 'react';
import '../styles/productCard.css';
import Button from './Button';

const ProductCard = ({title, imgUrl}) => {
  return (
    <div className='product-card'>
          <img src={imgUrl}/>
          <h1>{title}</h1>

          <section>
            <Button btnText='Buy Now' btnType='btn-green'/>
            <Button btnText='Add to Cart' btnType='btn-maroon'/>
          </section>
    </div>
  )
}

export default ProductCard