'use client';

import { WeatherData } from '@/types/weather';
import { getWeatherIcon, getWindDirection } from '@/lib/utils';
import Image from 'next/image';

interface WeatherCardProps {
  weather: WeatherData;
}

export default function WeatherCard({ weather }: WeatherCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-4xl font-bold text-gray-800">
          {weather.name}, {weather.sys.country}
        </h2>
        <p className="text-gray-600 mt-2 capitalize text-xl">
          {weather.weather[0].description}
        </p>
      </div>

      <div className="flex justify-center items-center mb-6">
        <Image
          src={getWeatherIcon(weather.weather[0].icon)}
          alt={weather.weather[0].description}
          width={120}
          height={120}
        />
        <div className="text-6xl font-bold text-gray-800">
          {Math.round(weather.main.temp)}°C
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-gray-600 text-sm">Feels Like</p>
          <p className="text-2xl font-semibold text-gray-800">
            {Math.round(weather.main.feels_like)}°C
          </p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-gray-600 text-sm">Humidity</p>
          <p className="text-2xl font-semibold text-gray-800">
            {weather.main.humidity}%
          </p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-gray-600 text-sm">Wind Speed</p>
          <p className="text-2xl font-semibold text-gray-800">
            {weather.wind.speed} m/s
          </p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-gray-600 text-sm">Wind Direction</p>
          <p className="text-2xl font-semibold text-gray-800">
            {getWindDirection(weather.wind.deg)}
          </p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-gray-600 text-sm">Pressure</p>
          <p className="text-2xl font-semibold text-gray-800">
            {weather.main.pressure} hPa
          </p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-gray-600 text-sm">Cloudiness</p>
          <p className="text-2xl font-semibold text-gray-800">
            {weather.clouds.all}%
          </p>
        </div>
      </div>
    </div>
  );
}
