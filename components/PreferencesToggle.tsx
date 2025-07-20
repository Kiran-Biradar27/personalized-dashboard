"use client";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowStocks, toggleTheme } from "../../store/slices/preference";





import { RootState } from "../src/store";

const PreferencesToggle = () => {
  const dispatch = useDispatch();
  const showStocks = useSelector((state: RootState) => state.preferences.showStocks);
  const theme = useSelector((state: RootState) => state.preferences.theme);

  return (
    <div className="p-4 flex gap-4">
      <button
        onClick={() => dispatch(toggleShowStocks())}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        {showStocks ? "Hide Stocks" : "Show Stocks"}
      </button>

      <button
        onClick={() => dispatch(toggleTheme())}
        className="px-4 py-2 bg-purple-500 text-white rounded"
      >
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default PreferencesToggle;
