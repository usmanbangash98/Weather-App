import React from "react";

const WeatherCard = ({ weatherData }) => {
  const currentWeather = weatherData.list[0];
  const weatherIcon = `http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`;

  return (
    <div className="bg-card backdrop-blur-md p-6 rounded-lg shadow-lg text-white w-full max-w-md">
      <h2 className="text-3xl font-bold mb-4 text-center">Weather Forecast</h2>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-2xl">{weatherData.city.name}</h3>
          <p>{new Date(currentWeather.dt * 1000).toLocaleDateString()}</p>
          <p className="capitalize">{currentWeather.weather[0].description}</p>
          <p>Humidity: {currentWeather.main.humidity}%</p>
          <p>Wind: {currentWeather.wind.speed} m/s</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={weatherIcon} alt="weather icon" className="w-20 h-20" />
          <p className="text-3xl">{Math.round(currentWeather.main.temp)}°C</p>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-2xl mb-2 text-center">5-Day Forecast</h3>
        <div className="grid grid-cols-2 gap-4">
          {weatherData.list.slice(1, 6).map((day, index) => {
            const dayIcon = `http://openweathermap.org/img/wn/${day.weather[0].icon}.png`;
            return (
              <div
                key={index}
                className="flex flex-col items-center p-2 bg-white bg-opacity-10 rounded-md">
                <span className="mb-2">
                  {new Date(day.dt * 1000).toLocaleDateString()}
                </span>
                <img
                  src={dayIcon}
                  alt="weather icon"
                  className="w-10 h-10 mb-2"
                />
                <span className="text-lg">{Math.round(day.main.temp)}°C</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
