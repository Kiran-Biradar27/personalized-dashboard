'use client';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../src/store';
import { togglePreference } from '../src/store/slices/preference';

const PreferencesPanel = () => {
  const dispatch = useDispatch();
  const { showNews, showWeather, showStocks } = useSelector(
    (state: RootState) => state.preferences
  );

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow space-y-4">
      <h2 className="text-xl font-semibold mb-2">🛠️ Customize Your Dashboard</h2>

      <div className="space-y-2">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={showNews}
            onChange={() => dispatch(togglePreference('showNews'))}
          />
          Show News
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={showWeather}
            onChange={() => dispatch(togglePreference('showWeather'))}
          />
          Show Weather
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={showStocks}
            onChange={() => dispatch(togglePreference('showStocks'))}
          />
          Show Stocks
        </label>
      </div>
    </div>
  );
};

export default PreferencesPanel;
