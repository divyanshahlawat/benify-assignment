"use client";
import { useFetchData } from "@/hooks/useFetchData";
import { addToCart } from "@/bussinessLogic/addToCart";
import { clearCart } from "@/bussinessLogic/clearCart";
import { removeFromCart } from "@/bussinessLogic/removeCart";
import { calculateTotalAmount } from "@/bussinessLogic/totalAmount";
import { CartItem } from "@/types/cart";
import { Category } from "@/types/category";
import { Product } from "@/types/product";
import { StoreContextType } from "@/types/storeContext";
import { createContext, ReactNode, useContext, useState } from "react";

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>();
  const [cartItem, setCartItem] = useState<CartItem[]>([]);
  useFetchData({ setCategories, setProducts });
  const handleAddToCart = (cartItem: CartItem) =>
    addToCart(cartItem, setCartItem);
  const handleClearCart = () => clearCart(setCartItem);
  const totalAmount = calculateTotalAmount(cartItem);
  const handleRemoveOneFromCart = (itemId: string) =>
    removeFromCart(itemId, setCartItem);
  return (
    <StoreContext.Provider
      value={{
        categories,
        products,
        selectedProduct,
        setSelectedProduct,
        setCartItem,
        cartItem,
        addToCart: handleAddToCart,
        removeFromCart: handleRemoveOneFromCart,
        clearCart: handleClearCart,
        totalAmount,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
};
