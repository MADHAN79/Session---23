
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';
import '../styles/ProductList.css';


const products = [
  { id: 1, name: 'Airpods Max',  description: '20 hrs Playback || Noise canceling', img: '../src/assets/images/airpods.jpg', rating: 4, price: '$1100.00' },
  { id: 2, name: 'iPad Pro 11"inch',  description: '11"inch Space Black', img: '../src/assets/images/ipadPro.jpg', rating: 5, price: '$1500.00' },
  { id: 3, name: 'iPad Pro 13"inch',  description: '13"inch Silver', img: '../src/assets/images/ipadSilver.png', rating: 5, price: '$1500.00' },
  { id: 4, name: 'M3 MacBook Pro 14"inch - Space Grey',  description: '8-core CPU ||10-core GPU ||16GB Unified Memory ||512GB SSD Storage', img: '../src/assets/images/M314inch.png', rating: 4, price: '$2500.00' },
  { id: 5, name: 'M3 Pro MacBook Pro 16"inch - Silver',  description: '12-core CPU ||18-core GPU ||18GB Unified Memory ||512GB SSD Storage', img: '../src/assets/images/M3Pro16inch.png', rating: 5, price: '$3000.00' },
  { id: 6, name: 'iPhone 15 Pro Max - Natural Titanium',  description: '6.7"inch || 1TB || Titanium with textured matt glass || A16 Pro chip || 48MP camera || USB-C port', img: '../src/assets/images/iPhone15ProMax.png', rating: 4, price: '$1500.00' }
  // Add more products as needed
];

//Each Product cards details are dynamically updated with this logic below
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

//Ensuring all the details are added to the product cards with isRequired method
ProductList.propTypes = {
  addToCart: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default ProductList;
