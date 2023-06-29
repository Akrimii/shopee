import { useState, useEffect } from "react";
import api from "../api/api";

export type Category = string;

function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get("/products/categories")
      .then((response) => setCategories(response.data))
      .catch((err) => setError(err.message));
  }, []);

  return { categories, error };
}

export default useCategories;
