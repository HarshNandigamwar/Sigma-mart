import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = async (id) => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const product = await response.json();

      const isAlreadyInCart = cart.find(item => item.id === product.id);
      if (isAlreadyInCart) {
        alert('Item already in cart!');
        return;
      }

      setCart([...cart, product]);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}