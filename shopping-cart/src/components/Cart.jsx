import PropTypes from 'prop-types';
import '../styles/Cart.css';

//displaying the number of items in the cart
const Cart = ({ cart }) => {
  const totalItems = cart.length;

  //logic for displaying the added items & removing the items from the cart
  const cartItems = cart.reduce((acc, item) => {
    const existingItem = acc.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  return (
    <div className="cart">
      <h2>Cart ({totalItems})</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id} className="cart-item">
            {item.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

//Ensuring all the details are getting added in cart with isRequired method
Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default Cart;
