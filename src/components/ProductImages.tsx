"use client";
import Image from "next/image";

const ProductImages = ({ items }: { items: any }) => {
  console.log(items);
  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={items?.image}
          alt="image"
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8"></div>
    </div>
  );
};

export default ProductImages;
