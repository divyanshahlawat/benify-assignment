import { Category } from "./category";
import { Product } from "./product";

export interface StoreContextType {
  categories: Category[];
  products: Product[];
  selectedProduct: Product | undefined;
  setSelectedProduct: React.Dispatch<React.SetStateAction<Product | undefined>>;
  cartItem: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
  totalAmount: number;
}
