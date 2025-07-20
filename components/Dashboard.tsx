"use client";
import Weather from "./widgets/Weather";
import News from "./widgets/News";
import Stocks from "./widgets/Stocks";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 p-4 text-black dark:text-white transition-colors duration-300">
      <h1 className="text-2xl font-bold mb-4">Your Personalized Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Weather />
        <News />
        <Stocks />
      </div>
    </main>
  );
}
