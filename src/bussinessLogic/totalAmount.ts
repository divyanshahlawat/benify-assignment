import { CartItem } from "@/types/cart";

export const calculateTotalAmount = (cartItems: CartItem[]): number => {
  return cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
};
