import { useState, useEffect } from "react";
import api from "../api/api";
import { shuffle } from "underscore";

export interface ProductResponse {
  limit: number;
  products: Product[];
}

export interface Product {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  rating: number;
  discountPercentage: number;
  brand: string;
  stock: number;
  images: string[];
  category: string;
  description: string;
}

function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get<ProductResponse>("/products")
      .then((response) => shuffle(response.data.products))
      .then((data) => setProducts(data))
      .catch((err) => setError(err.message));
  }, []);

  return { products, error };
}

export default useProducts;
