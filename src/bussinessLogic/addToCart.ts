// addToCart.ts
import { CartItem } from "@/types/cart";

export const addToCart = (
  product: CartItem,
  setCartItem: React.Dispatch<React.SetStateAction<CartItem[]>>
) => {
  setCartItem(prevCartItems => {
    const existingItemIndex = prevCartItems.findIndex(
      item => item.id === product.id
    );

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...prevCartItems];
      updatedCartItems[existingItemIndex].quantity += product.quantity;

      return updatedCartItems;
    }

    return [...prevCartItems, product];
  });
};
