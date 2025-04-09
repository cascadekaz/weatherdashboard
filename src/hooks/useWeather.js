import { useState, useEffect } from 'react'
import axios from 'axios'

const API_KEY = '91987d068becdec0621e1808ccc380a0'; //our api key

export const useWeather = () => {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [recentSearches, setRecentSearches] = useState([])

  const fetchWeather = async (city) => {
    if (!city) return
    
    setLoading(true)
    setError(null)
    
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      )
      
      setWeather(response.data)
      addRecentSearch(city)
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch weather data')
    } finally {
      setLoading(false)
    }
  }

  const addRecentSearch = (city) => {
    setRecentSearches(prev => {
      const newSearches = [city, ...prev.filter(item => item.toLowerCase() !== city.toLowerCase())]
      return newSearches.slice(0, 5)
    })
  }

  return { weather, loading, error, recentSearches, fetchWeather }
}