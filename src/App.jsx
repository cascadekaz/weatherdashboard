
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
        <div className="mx-auto max-w-2xl py-32 sm:py-24 lg:py-32">
          <div className="flex flex-1 justify-end absolute top-4 right-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full modeswitch"
              >
                {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
              </button>
            </div>
          <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 dark:text-white sm:text-7xl weatherdashboard">
              Weather Dashboard
           </h1>
           <p className="mt-8 text-lg font-medium text-pretty text-gray-500 dark:text-gray-300 sm:text-xl/8">
             Search for any city to view current weather conditions and forecasts.  </p>
             <div className="mt-10 flex items-center justify-center gap-x-6">
        <div className="w-full max-w-md">
          <SearchBar onSearch={fetchWeather} loading={loading} />
        </div>
      </div>
        </div>

        {/* <SearchBar onSearch={fetchWeather} loading={loading} /> */}
        
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

        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400 weather-data-note">
          <p>Data provided by OpenWeatherMap</p>
        </div>
      </div>
    </div>
  )
}

export default App;  
