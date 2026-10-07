import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    // Lazy initial state: read the saved cart once, so a page refresh doesn't empty it
    const [cart, setCart] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem("cart")) || [];
        } catch {
            return [];
        }
    });

    // Save to localStorage every time the cart changes
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const isInCart = (id) => cart.some((item) => item.id === id);

    // Returns true if added, false if it was already there
    const addToCart = (product) => {
        if (isInCart(product.id)) return false;
        setCart((prev) => [...prev, { ...product, quantity: 1 }]);
        return true;
    };

    const increaseQuantity = (id) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    // Never goes below 1
    const decreaseQuantity = (id) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <CartContext.Provider
            value={{ cart, addToCart, increaseQuantity, decreaseQuantity, removeFromCart, isInCart }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}