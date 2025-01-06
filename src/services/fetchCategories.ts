import { unexpectedError } from "@/error/fetchError";

export async function fetchCategories() {
  const res = await fetch("https://api.escuelajs.co/api/v1/categories?limit=7");
  if (!res.ok) {
    unexpectedError();
  }
  return res.json();
}
