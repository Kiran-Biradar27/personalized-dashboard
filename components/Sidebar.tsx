'use client';

import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <ul className="space-y-3">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/news">News</Link></li>
        <li><Link href="/weather">Weather</Link></li>
        <li><Link href="/stocks">Stocks</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
