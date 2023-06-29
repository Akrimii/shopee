import { useState, useEffect } from "react";
import reviewsApi from "../api/reviewsApi";

export interface Review {
  id: number;
  email: string;
  body: string;
  name: string;
}

function useReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    reviewsApi
      .get("/comments")
      .then((response) => setReviews(response.data))
      .catch((err) => setError(err.message));
  }, []);

  return { reviews, error };
}

export default useReviews;
