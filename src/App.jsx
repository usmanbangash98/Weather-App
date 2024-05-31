import React, { useState, useEffect } from "react";
import WeatherCard from "./components/WeatherCard";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [searchCity, setSearchCity] = useState("");
  const apiKey = "712bf4ef5d09d763e85f78f1f292659a";

  const fetchWeather = async (query) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=metric&appid=${apiKey}`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    const fetchWeatherByLocation = async (lat, lon) => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    navigator.geolocation.getCurrentPosition(
      (position) => {
        fetchWeatherByLocation(
          position.coords.latitude,
          position.coords.longitude
        );
      },
      (error) => {
        console.error("Error getting location:", error);
        fetchWeather("London"); // Default city if location fails
      }
    );
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchCity) {
      fetchWeather(searchCity);
      setSearchCity("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <form onSubmit={handleSearch} className="mb-6 w-full max-w-md flex">
        <input
          type="text"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
          className="flex-grow p-3 rounded-l-lg bg-white text-black"
          placeholder="Search for a city..."
        />
        <button type="submit" className="bg-accent p-3 rounded-r-lg text-white">
          Search
        </button>
      </form>
      {weatherData ? (
        <WeatherCard weatherData={weatherData} />
      ) : (
        <p className="text-white">Loading...</p>
      )}
    </div>
  );
};

export default App;
