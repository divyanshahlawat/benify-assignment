import { unexpectedError } from "@/error/fetchError";
import { Product } from "@/types/product";

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products?limit=5");
  if (!res.ok) {
    unexpectedError();
  }
  return res.json();
}
