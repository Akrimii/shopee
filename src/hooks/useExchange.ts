import { useState, useEffect } from "react";
import currencyApi from "../api/currencyApi";

interface Rate {
  [key: string]: number;
}

interface CurrencyResponse {
  base: string;
  rates: Rate;
}

function useExchange() {
  const [exchange, setExchange] = useState<Rate>({});
  const [error, setError] = useState("");

  useEffect(() => {
    currencyApi
      .get<CurrencyResponse>("")
      .then((response) => setExchange(response.data.rates))
      .catch((err) => setError(err.message));
  }, []);

  return { exchange, error };
}

export default useExchange;
