
import './WeatherCard.css';

export const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  const { name, main, weather: weatherInfo, wind } = weather;
  const iconUrl = `https://openweathermap.org/img/wn/${weatherInfo[0].icon}@2x.png`;

  return (
    <div className="weather-card">
      <h2 className="weather-card__title">{name}</h2>
      <div className="weather-card__main-content">
        <div>
          <p className="weather-card__temperature">{Math.round(main.temp)}°C</p>
          <p className="weather-card__description">{weatherInfo[0].description}</p>
        </div>
        <img src={iconUrl} alt={weatherInfo[0].main} className="weather-card__icon" />
      </div>
      <div className="weather-card__details-grid">
        <div className="weather-card__detail-box">
          <p className="weather-card__detail-label">Humidity</p>
          <p className="weather-card__detail-value">{main.humidity}%</p>
        </div>
        <div className="weather-card__detail-box">
          <p className="weather-card__detail-label">Wind Speed</p>
          <p className="weather-card__detail-value">{wind.speed} km/h</p>
        </div>
        <div className="weather-card__detail-box">
          <p className="weather-card__detail-label">Feels Like</p>
          <p className="weather-card__detail-value">{Math.round(main.feels_like)}°C</p>
        </div>
        <div className="weather-card__detail-box">
          <p className="weather-card__detail-label">Pressure</p>
          <p className="weather-card__detail-value">{main.pressure} hPa</p>
        </div>
      </div>
    </div>
  );
};