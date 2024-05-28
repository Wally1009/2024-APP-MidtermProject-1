import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems((prevItems) => {
            const existingItemIndex = prevItems.findIndex(cartItem => cartItem.key === item.key);
            if (existingItemIndex !== -1) {
                // 更新現有商品數量
                const updatedCartItems = [...prevItems];
                updatedCartItems[existingItemIndex].quantity += 1;
                return updatedCartItems;
            } else {
                // 添加新商品
                return [...prevItems, item];
            }
        });
    };

    const removeFromCart = (item) => {
        setCartItems((prevItems) => {
            const existingItemIndex = prevItems.findIndex(cartItem => cartItem.key === item.key);
            if (existingItemIndex !== -1) {
                const updatedCartItems = [...prevItems];
                updatedCartItems[existingItemIndex].quantity -= 1;
                if (updatedCartItems[existingItemIndex].quantity <= 0) {
                    // 如果商品數量為 0，則從購物車中移除
                    updatedCartItems.splice(existingItemIndex, 1);
                }
                return updatedCartItems;
            }
            return prevItems;
        });
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
