"use client";

import Weather from "@/components/widgets/Weather";
import News from "@/components/widgets/News";
import Stocks from "@/components/widgets/Stocks";

export default function Home() {
  return (
    <main className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">Your Personalized Dashboard</h1>

      <section className="bg-white rounded-xl p-4 shadow">
        <h2 className="text-xl font-semibold">🌤️ Weather</h2>
        <Weather />
      </section>

      <section className="bg-white rounded-xl p-4 shadow">
        <h2 className="text-xl font-semibold">📰 News</h2>
        <News />
      </section>

      <section className="bg-white rounded-xl p-4 shadow">
        <h2 className="text-xl font-semibold">📈 Stocks</h2>
        <Stocks />
      </section>
    </main>
  );
}
