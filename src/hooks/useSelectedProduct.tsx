import { useEffect } from "react";
import { Product } from "@/types/product";
import { handleNetworkError, logFetchDataError } from "@/error/fetchError";
import { fetchSelectedProductById } from "@/services/fetchSelectedProductById";

export const useSelectedProduct = ({
  setSelectedProduct,
  selectedProductId,
}: {
  setSelectedProduct: React.Dispatch<React.SetStateAction<Product[]>>;
  selectedProductId: number | undefined;
}) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedSingleProduct = await fetchSelectedProductById(
          selectedProductId
        );
        setSelectedProduct(fetchedSingleProduct);
      } catch (error) {
        handleNetworkError(error);
        logFetchDataError(error);
      }
    };

    fetchData();
  }, [selectedProductId, selectedProductId]);
};
