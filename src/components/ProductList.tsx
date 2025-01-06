import Image from "next/image";
import Link from "next/link";
import { useStore } from "@/context/StoreContext";
import { Routes } from "@/constants/route";
import { productListImage } from "@/constants/image";

const ProductList: React.FC = () => {
  const { products } = useStore();

  return (
    <div className="container mx-auto mt-12 flex gap-x-8 gap-y-16 flex-wrap justify-between">
      {products.map(({ image, title, price, id }, index) => (
        <Link
          href={`${Routes.productsRoute}/${id}`}
          key={index}
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        >
          <div className="relative w-full h-80">
            <Image
              src={image}
              alt={title}
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
            />
            <Image
              src={productListImage}
              alt="Fallback Image"
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md"
            />
          </div>
          <div className="flex justify-between">
            <span className="font-medium h-16">{title}</span>
            <span className="font-semibold">${price}</span>
          </div>

          <button className="rounded-2xl ring-1 ring-[#F35C7A] text-[#F35C7A] py-2 px-4 text-xs hover:bg-[#F35C7A] hover:text-white">
            View Similiar
          </button>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
