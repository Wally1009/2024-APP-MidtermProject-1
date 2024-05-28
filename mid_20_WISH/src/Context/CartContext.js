import React, { createContext, useContext, useState } from 'react';
import {Alert} from 'react-native';
// 創建一個新的上下文對象，名為 CartContext
const CartContext = createContext();

// 自定義鉤子函數，用於存取 CartContext 的值
export const useCart = () => useContext(CartContext);

// CartProvider 組件，包裹所有子組件並提供購物車狀態和操作方法
export const CartProvider = ({ children }) => {
    // 使用 useState 鉤子函數來管理購物車項目
    const [cartItems, setCartItems] = useState([]);

    // 添加到購物車的函數
    const addToCart = (item) => {
        setCartItems((prevItems) => {
            // 檢查購物車中是否已經存在相同的商品
            const existingItemIndex = prevItems.findIndex(cartItem => cartItem.key === item.key);
            if (existingItemIndex !== -1) {
                // 如果存在相同的商品，則將該商品的數量增加
                const updatedCartItems = [...prevItems];
                updatedCartItems[existingItemIndex].quantity += 1;
                return updatedCartItems;
            } else {
                // 如果購物車中不存在相同的商品，則將新商品添加到購物車，並初始化數量為 1
                return [...prevItems, { ...item, quantity: 1 }];
            }
        });
    };

    // 從購物車移除的函數
    const removeFromCart = (item) => {
        setCartItems((prevItems) => {
            // 檢查購物車中是否已經存在相同的商品
            const existingItemIndex = prevItems.findIndex(cartItem => cartItem.key === item.key);
            if (existingItemIndex !== -1) {
                // 如果存在相同的商品，則將該商品的數量減少
                const updatedCartItems = [...prevItems];
                updatedCartItems[existingItemIndex].quantity -= 1;
                if (updatedCartItems[existingItemIndex].quantity <= 0) {
                    // 如果商品數量為 0，則從購物車中移除
                    updatedCartItems.splice(existingItemIndex, 1);
                    Alert.alert('哭哭',`您已移除商品`);
                }
                return updatedCartItems;
            }
            return prevItems;
        });
    };

    // 返回 CartProvider 組件，將購物車狀態和操作方法傳遞給子組件
    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
