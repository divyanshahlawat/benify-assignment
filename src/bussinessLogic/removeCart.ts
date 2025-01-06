import { CartItem } from "@/types/cart";

export const removeFromCart = (
  itemId: string,
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>
): void => {
  setCartItems(prev =>
    prev
      .map(item =>
        item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter(item => item.quantity > 0)
  );
};
