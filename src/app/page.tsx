"use client";
import { fetchCategories, fetchProducts } from "../lib/api";
import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";
import Slider from "../components/Slider";
import { Category } from "../types/category";
import { Product } from "../types/product";
import { useEffect, useState } from "react";
import { StoreProvider } from "@/context/StoreContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { logFetchDataError } from "@/error/fetchError";
import Loader from "@/components/loader";

const HomePage = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const fetchedCategories = await fetchCategories();
        const fetchedProducts = await fetchProducts();
        setCategories(fetchedCategories);
        setProducts(fetchedProducts);
      } catch (error) {
        logFetchDataError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div>
        <h2 className="text-xl text-center text-red-500">{error}</h2>
      </div>
    );
  }
  return (
    <StoreProvider>
      <div>
        <Slider />
        <div className="mt-24 ">
          <h1 className="text-2xl  px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">
            Categories
          </h1>
          <CategoryList categories={categories} />
        </div>
        <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 ">
          <h1 className="text-2xl">Products</h1>
          <ProductList products={products} />
        </div>
      </div>
      <ToastContainer />
    </StoreProvider>
  );
};

export default HomePage;
