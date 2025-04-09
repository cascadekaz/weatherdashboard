# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Weather Dashboard

A responsive weather application built with React that displays current weather conditions and 5-day forecasts for any city worldwide.

## Tech Stack

- **Frontend**: 
  - React.js (v19)
  - Vite (Build Tool)
  - Tailwind CSS (Styling)
- **API**: 
  - OpenWeatherMap API (Current Weather & 5-Day Forecast)
- **State Management**: 
  - React Hooks (useState, useEffect)
- **HTTP Client**: 
  - Axios

## Features

- Current weather display (temperature, humidity, wind speed, etc.)
- 5-day weather forecast
- City search functionality
- Dark/Light mode toggle
- Responsive design (mobile & desktop)
- Loading and error states
- Recent search history

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher)
- OpenWeatherMap API key

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/weather-dashboard.git
   cd weather-dashboard
2. Clone the repository:
   ```bash
   npm install
3. Clone the repository:
   ```bash
   npm run dev

## API Integration
- OpenWeatherMap API
1. Current Weather Data:
   ```bash
   https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric
2. 5-Day Forecast:
   ```bash
   https://api.openweathermap.org/data/2.5/forecast?q={city}&appid={API_KEY}&units=metric
3. Obtain a free API key from OpenWeatherMap

## Rate Limits
- Free tier: 60 calls/minute
- 1,000,000 calls/month
- If you exceed limits, you'll receive HTTP 429 error
