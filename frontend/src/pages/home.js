import React from 'react';
import '../styles/home.css';
import ProductCard from '../components/ProductCard';

const home = () => {
  return (
    <div>
        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"/>

        <div className='product-grid'>
          <ProductCard title='Camera' imgUrl='https://cdn.pixabay.com/photo/2012/04/13/17/00/camera-32871_960_720.png'/>
          <ProductCard title='T-Shirt' imgUrl='https://cdn.pixabay.com/photo/2013/07/13/14/08/apparel-162192_960_720.png'/>
          <ProductCard title='Smart Phone' imgUrl='https://cdn.pixabay.com/photo/2016/07/22/08/26/iphone-6s-plus-1534380_960_720.png'/>
          <ProductCard title='Refrigerator' imgUrl='https://cdn.pixabay.com/photo/2017/10/07/16/39/fridge-2827034_960_720.png'/>
        </div>
    </div>
  )
}

export default home