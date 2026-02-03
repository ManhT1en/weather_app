'use client';

import { WeatherData } from '@/types/weather';
import { getWeatherIcon, getWindDirection } from '@/lib/utils';
import Image from 'next/image';

interface WeatherCardProps {
  weather: WeatherData;
}

export default function WeatherCard({ weather }: WeatherCardProps) {
  return (
    <div className="backdrop-blur-2xl bg-white/10 rounded-3xl shadow-2xl p-8 md:p-10 max-w-3xl mx-auto border border-white/20 hover:bg-white/15 transition-all duration-300">
      <div className="text-center mb-8">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-2 drop-shadow-lg">
          {weather.name}, {weather.sys.country}
        </h2>
        <p className="text-white/80 mt-3 capitalize text-xl md:text-2xl font-light">
          {weather.weather[0].description}
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
        <div className="relative">
          <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl"></div>
          <Image
            src={getWeatherIcon(weather.weather[0].icon)}
            alt={weather.weather[0].description}
            width={160}
            height={160}
            className="relative z-10 drop-shadow-2xl"
          />
        </div>
        <div className="text-8xl md:text-9xl font-bold text-white drop-shadow-2xl">
          {Math.round(weather.main.temp)}°
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
        <div className="backdrop-blur-xl bg-white/10 p-5 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-200">
          <p className="text-white/70 text-sm font-medium mb-1">Feels Like</p>
          <p className="text-3xl font-bold text-white">
            {Math.round(weather.main.feels_like)}°C
          </p>
        </div>

        <div className="backdrop-blur-xl bg-white/10 p-5 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-200">
          <p className="text-white/70 text-sm font-medium mb-1">Humidity</p>
          <p className="text-3xl font-bold text-white">
            {weather.main.humidity}%
          </p>
        </div>

        <div className="backdrop-blur-xl bg-white/10 p-5 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-200">
          <p className="text-white/70 text-sm font-medium mb-1">Wind Speed</p>
          <p className="text-3xl font-bold text-white">
            {weather.wind.speed} m/s
          </p>
        </div>

        <div className="backdrop-blur-xl bg-white/10 p-5 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-200">
          <p className="text-white/70 text-sm font-medium mb-1">Wind Direction</p>
          <p className="text-3xl font-bold text-white">
            {getWindDirection(weather.wind.deg)}
          </p>
        </div>

        <div className="backdrop-blur-xl bg-white/10 p-5 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-200">
          <p className="text-white/70 text-sm font-medium mb-1">Pressure</p>
          <p className="text-3xl font-bold text-white">
            {weather.main.pressure} hPa
          </p>
        </div>

        <div className="backdrop-blur-xl bg-white/10 p-5 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-200">
          <p className="text-white/70 text-sm font-medium mb-1">Cloudiness</p>
          <p className="text-3xl font-bold text-white">
            {weather.clouds.all}%
          </p>
        </div>
      </div>
    </div>
  );
}
