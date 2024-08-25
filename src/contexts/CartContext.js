import React, { createContext, useState } from 'react';

export const CartContext = createContext({});

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    function addProduct(product) {
        setCart([...cart, product]);
    }

    return (
        <CartContext.Provider value={{ cart, addProduct }}>
            {children}
        </CartContext.Provider>
    );
}