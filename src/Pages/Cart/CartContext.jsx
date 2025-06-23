import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
const [message, setMessage] = useState('')
  const addToCart = async (id) => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const product = await response.json();

      const isAlreadyInCart = cart.find(item => item.id === product.id);
      if (isAlreadyInCart) {
        setMessage('Item already in cart!');
        setTimeout(() => setMessage(''), 2000); // hide after 2 seconds
        return;
      }

      setCart([...cart, product]);
setMessage('Item Added !');
setTimeout(() => {
  setMessage('');
}, 2000);

    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
    setMessage('Item removed from cart !')
  };

  const clearMessage = () =>{
    setMessage('');
  };
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, message, clearMessage }}>
      {children}
    </CartContext.Provider>
  );
}