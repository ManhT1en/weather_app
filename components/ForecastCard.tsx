'use client';

import { ForecastData } from '@/types/weather';
import { getWeatherIcon, formatDate, formatTime } from '@/lib/utils';
import Image from 'next/image';

interface ForecastCardProps {
  forecast: ForecastData;
}

export default function ForecastCard({ forecast }: ForecastCardProps) {
  const dailyForecasts = forecast.list.filter((item, index) => index % 8 === 0).slice(0, 5);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-6xl mx-auto mt-8">
      <h3 className="text-3xl font-bold text-gray-800 mb-6">5-Day Forecast</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {dailyForecasts.map((item) => (
          <div
            key={item.dt}
            className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center"
          >
            <p className="font-semibold text-gray-800 mb-2">
              {formatDate(item.dt)}
            </p>
            <p className="text-sm text-gray-600 mb-3">
              {formatTime(item.dt)}
            </p>
            <Image
              src={getWeatherIcon(item.weather[0].icon)}
              alt={item.weather[0].description}
              width={80}
              height={80}
              className="mx-auto"
            />
            <p className="text-3xl font-bold text-gray-800 my-2">
              {Math.round(item.main.temp)}°C
            </p>
            <p className="text-sm text-gray-600 capitalize">
              {item.weather[0].description}
            </p>
            <div className="mt-4 text-sm text-gray-700">
              <p>💧 {item.main.humidity}%</p>
              <p>💨 {item.wind.speed} m/s</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h4 className="text-xl font-semibold text-gray-800 mb-4">Hourly Forecast (Next 24 Hours)</h4>
        <div className="overflow-x-auto">
          <div className="flex gap-4 pb-4">
            {forecast.list.slice(0, 8).map((item) => (
              <div
                key={item.dt}
                className="bg-blue-50 p-4 rounded-lg min-w-[140px] text-center"
              >
                <p className="font-semibold text-gray-700 text-sm mb-2">
                  {formatTime(item.dt)}
                </p>
                <Image
                  src={getWeatherIcon(item.weather[0].icon)}
                  alt={item.weather[0].description}
                  width={60}
                  height={60}
                  className="mx-auto"
                />
                <p className="text-2xl font-bold text-gray-800 my-1">
                  {Math.round(item.main.temp)}°C
                </p>
                <p className="text-xs text-gray-600">
                  💧 {item.main.humidity}%
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
