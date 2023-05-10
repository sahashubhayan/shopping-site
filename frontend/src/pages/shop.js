import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const fetchProductData = async () => {
  const res = await axios.get('http://localhost:4000/products');

  console.log(res.data);

  const data = res.data;

  return data;
};


const Shop = () => {

  const [data, setData] = useState([]);

  const assignData = async () => {
    const fetchedData = await fetchProductData();
    setData(fetchedData);
  };

  useEffect(() => {
    assignData();
  }, []);

  return (
    <div className='store-container'>
      {data.map((product) => {
        return (
          <ProductCard
          title={product.title}
          imgUrl={product.imgUrl}
          key={product._id}
          />
        )
      })}
    </div>
  )
};

export default Shop