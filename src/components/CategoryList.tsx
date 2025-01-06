import Image from "next/image";
import Link from "next/link";
import { CategoryListProps } from "../types/category";
import { useStore } from "@/context/StoreContext";

const CategoryList: React.FC<CategoryListProps> = () => {
  const { categories } = useStore();
  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
        {categories.map(({ name, image, id }) => (
          <Link
            key={id}
            href="/list?cat=test"
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
          >
            <div className="relative bg-slate-100 w-full h-96">
              <Image src={`${image}`} alt={name} fill sizes="20vw" />
            </div>
            <h1 className="mt-8 font-light text-center tracking-wide">
              {name}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
