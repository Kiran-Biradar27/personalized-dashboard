"use client";
import { useEffect, useState } from "react";
import axios from "axios";

const Weather = () => {
  const [data, setData] = useState<any>(null);

  const fallbackWeather = {
    city: "Bengaluru",
    temperature: 26.5,
    condition: "Clear sky",
    url: "https://www.weather.com/weather/today/l/INXX0012:1:IN",
  };

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=Bangalore&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
        );
        setData(res.data);
      } catch (error) {
        console.error("Weather error:", error);
        setData(fallbackWeather);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="p-4 rounded-lg shadow bg-blue-100 dark:bg-blue-900">
      <h2 className="text-xl font-semibold mb-2">🌤️ Weather</h2>
      {data ? (
        <p>{data.name}: {data.main.temp}°C, {data.weather[0].description}</p>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
};

export default Weather;
