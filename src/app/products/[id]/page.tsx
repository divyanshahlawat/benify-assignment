"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchSelectedProductById } from "@/services/fetchSelectedProductById";
import { Product } from "@/types/product";
import Add from "@/components/Add";
import { logFetchDataError } from "@/error/fetchError";

const SinglePage: React.FC = () => {
  const { id } = useParams();

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const data = await fetchSelectedProductById(Number(id));
          setSelectedProduct(data);
        } catch (err) {
          logFetchDataError(err as Error);
        }
      };
      fetchProduct();
    }
  }, [id]);
  if (!selectedProduct) {
    return <div>Loading...</div>;
  }

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max"></div>

      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">{selectedProduct?.title}</h1>
        <p className="text-gray-500">{selectedProduct?.description}</p>
        <div className="h-[2px] bg-gray-100" />${selectedProduct?.price}
        <div className="h-[2px] bg-gray-100" />
        <Add selectedProduct={selectedProduct} />
        <div className="h-[2px] bg-gray-100" />
        <div className="h-[2px] bg-gray-100" />
      </div>
    </div>
  );
};

export default SinglePage;
