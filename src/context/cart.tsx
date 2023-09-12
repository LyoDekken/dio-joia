import React, { createContext, useContext, useState, useEffect } from "react";

type CartItem = {
  id: number;
  title: string;
  value: number;
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: any) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  console.log(cartItems);
  
  useEffect(() => {
    const savedCart = localStorage.getItem("@diojoiasemprata-cart-test");

    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  const addToCart = (item: CartItem) => {
    const updatedCart = [...cartItems, item];
    setCartItems(updatedCart);
    localStorage.setItem("@diojoiasemprata-cart-test", JSON.stringify(updatedCart));
  };

  const removeFromCart = () => {
    localStorage.removeItem("@diojoiasemprata-cart-test");
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};
