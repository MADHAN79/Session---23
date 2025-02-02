import { useState } from 'react';
import './styles/App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
  const [cart, setCart] = useState([]);

  //Product add to cart logic
  const addToCart = (product) => {
    setCart(prevCart => {
      const itemInCart = prevCart.find(item => item.id === product.id);
      if (itemInCart) {
        return prevCart.filter(item => item.id !== product.id);
      } else {
        return [...prevCart, product];
      }
    });
  };

  //Layout for the products and cart is coded here
  return (
    <div className="app">
      <header className="header">
        <h1 className="shop-title"><img src='../src/assets/images/appleLogo.png' className='Logo'/> Apple</h1>
      </header>
      <main className="main-content">
        <ProductList addToCart={addToCart} cart={cart} />
        <Cart cart={cart} />
      </main>
      <footer>
        <p>Copyright @ MADHAN FSD61WDT 2024</p>
      </footer>
    </div>
  );
};

export default App;
