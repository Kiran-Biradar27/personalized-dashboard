'use client';

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  togglePreference,
  setTheme,
  setLanguage,
} from "../../store/slices/preference";

const PreferencesPage = () => {
  const dispatch = useDispatch();
  const preferences = useSelector((state: RootState) => state.preferences);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Preferences</h1>

      {/* Boolean Toggles */}
      <div className="space-y-2 mb-6">
        {(["showWeather", "showNews", "showStocks"] as const).map((key) => (
          <label key={key} className="block">
            <input
              type="checkbox"
              checked={preferences[key]}
              onChange={() => dispatch(togglePreference(key))}
              className="mr-2"
            />
            {key.replace("show", "")}
          </label>
        ))}
      </div>

      {/* Theme Toggle */}
      <div className="mb-4">
        <label className="mr-2 font-medium">Theme:</label>
        <select
          value={preferences.theme}
          onChange={(e) =>
            dispatch(setTheme(e.target.value as "light" | "dark"))
          }
          className="border px-2 py-1 rounded"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      {/* Language Toggle */}
      <div className="mb-4">
        <label className="mr-2 font-medium">Language:</label>
        <select
          value={preferences.language}
          onChange={(e) =>
            dispatch(setLanguage(e.target.value as "en" | "hi"))
          }
          className="border px-2 py-1 rounded"
        >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
        </select>
      </div>
    </div>
  );
};

export default PreferencesPage;