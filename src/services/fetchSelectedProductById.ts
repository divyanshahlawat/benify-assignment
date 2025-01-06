import { Routes } from "@/constants/route";
import { unexpectedError } from "@/error/fetchError";

export const fetchSelectedProductById = async (selectedProductId: number) => {
  console.log("selectedProductId", selectedProductId);
  console.log(Routes);
  const res = await fetch(
    `${Routes.productApiUrl}${Routes.productsRoute}/${selectedProductId}`
  );
  if (!res.ok) {
    unexpectedError();
  }
  console.log("response", res);
  const data = await res.json();
  return data;
};
