"use client";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../src/store"; 
import { toggleTheme } from "../src/store/slices/preference";

export default function Navbar() {
  const dispatch = useDispatch();
  const theme = useSelector((s: RootState) => s.preferences.theme);

  return (
    <nav className="px-4 py-2 bg-white dark:bg-gray-800 flex justify-between items-center shadow">
      <h1 className="text-xl font-bold">🧠 Dashboard</h1>
      <button
        onClick={() => dispatch(toggleTheme())}
        className="px-3 py-1 rounded bg-indigo-500 text-white"
      >
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}
