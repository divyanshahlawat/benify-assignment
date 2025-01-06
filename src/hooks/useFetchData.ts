import { useEffect } from "react";
import { Category } from "@/types/category";
import { Product } from "@/types/product";
import { fetchCategories } from "@/services/fetchCategories";
import { fetchProducts } from "@/services/fetchProducts";
import { handleNetworkError, logFetchDataError } from "@/error/fetchError";

export const useFetchData = ({
  setCategories,
  setProducts,
}: {
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedCategories = await fetchCategories();
        const fetchedProducts = await fetchProducts();
        setCategories(fetchedCategories);
        setProducts(fetchedProducts);
      } catch (error) {
        handleNetworkError(error as Error);
        logFetchDataError(error as Error);
        console.log("");
      }
    };

    fetchData();
  }, [setCategories, setProducts]);
};
