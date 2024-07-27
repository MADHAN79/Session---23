
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';
import '../styles/ProductList.css';


const products = [
  { id: 1, name: 'Airpods Max',  img: '../src/assets/images/airpods.jpg', rating: 4, price: '$1100.00' },
  { id: 2, name: 'iPad Pro',  img: '../src/assets/images/ipadPro.jpg', rating: 5, price: '$1500.00' },
  { id: 3, name: 'iPad 2',  img: '../src/assets/images/ipadPro.jpg', rating: 5, price: '$1500.00' },
  { id: 4, name: 'iPad 3',  img: '../src/assets/images/ipadPro.jpg', rating: 5, price: '$1500.00' },
  { id: 5, name: 'iPad 4',  img: '../src/assets/images/ipadPro.jpg', rating: 5, price: '$1500.00' },
  { id: 6, name: 'iPad 5',  img: '../src/assets/images/ipadPro.jpg', rating: 5, price: '$1500.00' }
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
