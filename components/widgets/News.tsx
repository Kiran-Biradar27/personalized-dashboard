"use client";
import { useEffect, useState } from "react";
import axios from "axios";

interface Article {
  title: string;
  url: string;
}

export default function News() {
  const [articles, setArticles] = useState<Article[]>([]);
  const fallbackNews: Article[] = [
    { title: "India Launches New Satellite for Weather Monitoring", url: "#" },
    { title: "Sensex Surges 300 Points Amid Global Rally", url: "#" },
    { title: "Tech Startups in Bengaluru Attract Global Investors", url: "#" },
  ];

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=in&pageSize=5&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
      )
      .then((res) => {
        const fetchedArticles = res.data.articles.map((a: any) => ({
          title: a.title,
          url: a.url,
        }));
        setArticles(fetchedArticles);
      })
      .catch(() => {
        // Use fallback news if API fails
        setArticles(fallbackNews);
      });
  }, []);

  return (
    <div className="p-4 rounded-lg shadow bg-white dark:bg-gray-800">
      <h2 className="font-semibold mb-2">📰 News</h2>
      {articles.length > 0 ? (
        <ul className="list-disc ml-4 space-y-1">
          {articles.map((article, index) => (
            <li key={index}>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {article.title}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading news...</p>
      )}
    </div>
  );
}
