
import { useState } from 'react'
import { useWeather } from './hooks/useWeather'
import { SearchBar } from './components/SearchBar'
import { WeatherCard } from './components/WeatherCard'
import { RecentSearches } from './components/RecentSearches'
import { Forecast } from './components/Forecast'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const { weather, loading, error, recentSearches, fetchWeather } = useWeather()

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark', !darkMode)
  }

  return (
    <div className={`min-h-screen p-4 md:p-8 ${darkMode ? 'dark' : ''}`}>
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Weather Dashboard</h1>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>

        <SearchBar onSearch={fetchWeather} loading={loading} />
        
        {recentSearches.length > 0 && (
          <RecentSearches searches={recentSearches} onSearch={fetchWeather} />
        )}

        {loading && <p className="text-center py-8">Loading weather data...</p>}
        
        {error && (
          <div className="bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-300 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        {weather && (
          <>
            <WeatherCard weather={weather} />
            <Forecast city={weather.name} />
          </>
        )}

        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Data provided by OpenWeatherMap</p>
        </div>
      </div>
    </div>
  )
}

export default App;  
