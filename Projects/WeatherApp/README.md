# Modern Weather Dashboard

A sleek, professional weather dashboard application built with HTML, CSS, and JavaScript featuring a dark-themed UI.

## Features

- Beautiful dark theme UI inspired by modern design trends
- Current weather conditions with temperature and weather icon
- 7-day forecast with high/low temperatures
- Hourly forecast for the current day
- Air conditions panel showing real feel, wind speed, chance of rain, and UV index
- Responsive design that works on all devices and in landscape mode
- Sidebar navigation for potential additional features

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- OpenWeatherMap API (with WeatherAPI.com fallback)
- Font Awesome for icons
- Google Fonts (Poppins)

## How to Use

1. Open the app in your web browser
2. Search for a city in the search box and press Enter
3. View detailed weather information for the location
4. Use the sidebar navigation for additional features
5. Rotate your device to enjoy the landscape mode on mobile and tablet

## API Setup

The app uses OpenWeatherMap API with WeatherAPI.com as a fallback.

### Setting Up API Keys

1. **Create your API configuration file**
   - Copy the `apiconfig.example.js` file to a new file named `apiconfig.js`
   - The `apiconfig.js` file is already added to `.gitignore` to prevent accidentally committing your API keys
   - This approach allows you to keep your keys in the codebase for local development, but prevents them from being shared publicly

2. **OpenWeatherMap API**
   - Sign up for a free account at [OpenWeatherMap](https://openweathermap.org/api)
   - Get your API key from your account dashboard
   - Replace `YOUR_OPENWEATHER_API_KEY_HERE` in `apiconfig.js` with your actual API key

3. **WeatherAPI.com (Fallback)**  
   - Sign up for a free account at [WeatherAPI.com](https://www.weatherapi.com/)
   - Get your API key from your account dashboard
   - Replace `YOUR_WEATHERAPI_KEY_HERE` in `apiconfig.js` with your actual API key

> **Security Note**: Never commit your actual API keys to public repositories. The `.gitignore` file is set up to exclude the `apiconfig.js` file from being committed.

## API Integration

This app primarily uses these OpenWeatherMap endpoints:
- Current Weather API (free)
- 5-day/3-hour Forecast API (free)
- One Call API 3.0 (requires paid subscription, app has fallback mechanisms)

The application will use the free APIs when the One Call API is not available.

## Responsive Design

The application is fully responsive and adapts to different screen sizes:
- Desktop: Full dashboard layout with sidebar
- Tablet: Adjusted layout with preserved functionality
- Mobile: Condensed view with horizontal sidebar navigation
- Landscape Mode: Optimized grid layout for horizontal orientation on any device 