import { useState, useEffect } from 'react'
import axios from 'axios'

const API_KEY = '91987d068becdec0621e1808ccc380a0'; // Our api key

export const Forecast = ({ city }) => {
  const [forecast, setForecast] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!city) return

    const fetchForecast = async () => {
      setLoading(true)
      setError(null)
      
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
        )
        
        // Group by day
        const dailyForecast = response.data.list.reduce((acc, item) => {
          const date = item.dt_txt.split(' ')[0]
          if (!acc[date]) {
            acc[date] = []
          }
          acc[date].push(item)
          return acc
        }, {})
        
        setForecast(dailyForecast)
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch forecast data')
      } finally {
        setLoading(false)
      }
    }

    fetchForecast()
  }, [city])

  if (!city) return null;
  if (loading) return <p className="loading-forecast">Loading forecast...</p>;
  if (error) return <p className="forecast-error">{error}</p>;
  if (!forecast) return null;

  return (
    <div className="forecast-container">
      <h3 className="forecast-title">5-Day Forecast</h3>
      <div className="forecast-grid">
        {Object.entries(forecast).slice(0, 5).map(([date, items]) => {
          const day = new Date(date).toLocaleDateString('en-US', { weekday: 'short' });
          const temp = Math.round(items[0].main.temp);
          const icon = items[0].weather[0].icon;
          
          return (
            <div key={date} className="forecast-day-card">
              <p className="forecast-day-name">{day}</p>
              <img 
                src={`https://openweathermap.org/img/wn/${icon}.png`} 
                alt={items[0].weather[0].main}
                className="forecast-icon"
              />
              <p className="forecast-temp">{temp}°C</p>
              <p className="forecast-description">
                {items[0].weather[0].description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};