import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ProductItem.css';

const ProductItem = ({ product, addToCart, cart }) => {
  const inCart = cart.some(item => item.id === product.id);

  return (
    <div className="product-item">
      <img src={product.img} alt={product.name} className="product-image" />
      <h5>{product.name}</h5>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <div className="rating">
        {'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}
      </div>
      <button
        className={`btn ${inCart ? 'btn-danger' : 'btn-primary'}`}
        onClick={() => addToCart(product)}
      >
        {inCart ? 'Remove from Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default ProductItem;
