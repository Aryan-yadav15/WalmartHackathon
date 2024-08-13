import Navbar from '@/app/components/Navbar';
import React from 'react';
import data from '../../../lib/data.js';

const ProductPage = ({ params }) => {
  const { id } = params; // Access the dynamic `id` parameter
  console.log('Params:', params);
  console.log('Data:', data);

  // Ensure id is compared as a number
  const product = data ? data.find((product) => product.id === Number(id)) : null;

  return (
    <div className='px-10'>
      <Navbar />
      {product ? (
        <>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Discount: {product.discount}%</p>
          <p>Rating: {product.rating}</p>
          <p>Brand: {product.brand}</p>
          <p>Category: {product.category}</p>
          <p>{product.stockAvailability ? 'In Stock' : 'Out of Stock'}</p>
          <img src={product.imageUrl} alt={product.name} />
        </>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ProductPage;
