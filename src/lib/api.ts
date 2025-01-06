import { Product } from "@/types/product";

export async function fetchCategories() {
  const res = await fetch("https://api.escuelajs.co/api/v1/categories?limit=7");
  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }
  return res.json();
}

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products?limit=5");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}

// constants.tsx   class Api-Routes{base url , products = /}
// services/products.tsx class ProductsService{ getProducts()}  ProductService.getProducts()
// models.tsx/product/tsx class Product{id, name, description, price, categoryId, imageUrl, stock}
//error
