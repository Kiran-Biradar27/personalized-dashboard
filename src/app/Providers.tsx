"use client";
import { Provider } from "react-redux";
import { store } from "../store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

function ThemeSetter() {
  const theme = useSelector((s: RootState) => s.preferences.theme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return null;
}

export default function Providers({ children }) {
  return (
    <Provider store={store}>
      <ThemeSetter />
      {children}
    </Provider>
  );
}
