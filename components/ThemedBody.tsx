'use client';

import { useSelector } from 'react-redux';
import { RootState } from "../src/store";

export default function ThemedBody({ children }: { children: React.ReactNode }) {
  const theme = useSelector((state: RootState) => state.preferences.theme);

  return (
     <div
      className={`${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      } transition-colors duration-300 min-h-screen`}
    >
      {children}
    </div>
  );
}
