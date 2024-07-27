import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';
import '../styles/ProductList.css';


const products = [
  { id: 1, name: 'Airpods Max', description: 'This is product 1.', img: '../src/assets/images/airpods.jpg', rating: 4, price: '$10.00' },
  { id: 2, name: 'Product 2', description: 'This is product 2.', img: 'path/to/image2.jpg', rating: 5, price: '$20.00' },
  // Add more products as needed
];

const ProductList = ({ addToCart, cart }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductItem
          key={product.id}
          product={product}
          addToCart={addToCart}
          cart={cart}
        />
      ))}
    </div>
  );
};

ProductList.propTypes = {
  addToCart: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default ProductList;
