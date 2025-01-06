import { CartItem } from "./cart";
import { Category } from "./category";
import { Product } from "./product";

export interface StoreContextType {
  categories: Category[];
  products: Product[];
  selectedProduct: Product | undefined;
  setSelectedProduct: React.Dispatch<React.SetStateAction<Product | undefined>>;
  cartItem: CartItem[];
  setCartItem: React.Dispatch<React.SetStateAction<CartItem[]>>;
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
  totalAmount: number;
}
