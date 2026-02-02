'use client';

import { useState, useEffect } from 'react';
import SearchBar from '@/components/SearchBar';
import WeatherCard from '@/components/WeatherCard';
import ForecastCard from '@/components/ForecastCard';
import { WeatherData, ForecastData } from '@/types/weather';
import {
  getCurrentWeather,
  getForecast,
  getCurrentWeatherByCoords,
  getForecastByCoords,
} from '@/lib/weatherApi';

export default function Home() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            setLoading(true);
            const weatherData = await getCurrentWeatherByCoords(
              position.coords.latitude,
              position.coords.longitude
            );
            const forecastData = await getForecastByCoords(
              position.coords.latitude,
              position.coords.longitude
            );
            setWeather(weatherData);
            setForecast(forecastData);
            setError(null);
          } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to fetch weather data';
            setError(errorMessage);
          } finally {
            setLoading(false);
          }
        },
        () => {
          handleSearch('London');
        }
      );
    } else {
      handleSearch('London');
    }
  }, []);

  const handleSearch = async (city: string) => {
    try {
      setLoading(true);
      setError(null);
      const weatherData = await getCurrentWeather(city);
      const forecastData = await getForecast(city);
      setWeather(weatherData);
      setForecast(forecastData);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'City not found. Please try again.';
      setError(errorMessage);
      setWeather(null);
      setForecast(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 py-12 px-4">
      <div className="container mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Weather Application</h1>
          <p className="text-xl text-blue-100">
            Get real-time weather updates and forecasts
          </p>
        </header>

        <SearchBar onSearch={handleSearch} />

        {loading && (
          <div className="text-center text-white text-xl">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent"></div>
            <p className="mt-4">Loading weather data...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg max-w-2xl mx-auto">
            {error}
          </div>
        )}

        {weather && !loading && <WeatherCard weather={weather} />}

        {forecast && !loading && <ForecastCard forecast={forecast} />}

        {!weather && !loading && !error && (
          <div className="text-center text-white text-xl">
            Search for a city to see the weather
          </div>
        )}
      </div>

      <footer className="text-center mt-16 text-white">
        <p className="text-sm">
          Weather data provided by OpenWeatherMap
        </p>
        <p className="text-xs mt-2">
          IWS Spring 2026 - Midterm Project
        </p>
      </footer>
    </div>
  );
}
