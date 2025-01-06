import { CartItem } from "@/types/cart";

export const clearCart = (
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>
) => {
  setCartItems([]);
};
