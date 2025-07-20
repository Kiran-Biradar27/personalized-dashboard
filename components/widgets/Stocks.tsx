"use client";
import { useEffect, useState } from "react";
import axios from "axios";

const Stocks = () => {
  const [data, setData] = useState<any>(null);

  
  const fallbackStock = {
    symbol: "AAPL",
    price: "211.17",
    url: "https://finance.yahoo.com/quote/AAPL",
  };

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        // Replace with real API call
        const res = await axios.get(
          `https://api.twelvedata.com/price?symbol=AAPL&apikey=${process.env.NEXT_PUBLIC_STOCK_API_KEY}`
        );
        setData(res.data);
      } catch (error) {
        console.error("Stock error:", error);
        setData(fallbackStock);
      }
    };

    fetchStocks();
  }, []);

  return (
    <div className="p-4 rounded-lg shadow bg-green-100 dark:bg-green-900">
      <h2 className="text-xl font-semibold mb-2">📈 Stocks</h2>
      {data ? (
        <p>
          <a
            href={data.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-600 dark:hover:text-green-200"
          >
            {data.symbol}: ${data.price}
          </a>
        </p>
      ) : (
        <p>Loading stock data...</p>
      )}
    </div>
  );
};

export default Stocks;
