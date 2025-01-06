export interface Category {
  id: number;
  name: string;
  image?: string;
}
interface CategoryListProps {
  categories: Category[];
}
