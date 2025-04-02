// Import API keys from configuration file
import { OPENWEATHER_API_KEY, WEATHERAPI_KEY } from './apiconfig.js';

const container = document.querySelector('.container');
const searchInput = document.querySelector('.search-box input');
const currentWeather = document.querySelector('.current-weather');
const forecastSection = document.querySelector('.forecast-section');
const todayForecast = document.querySelector('.today-forecast');
const hourForecast = document.querySelector('.hour-forecast');
const airConditions = document.querySelector('.air-conditions');
const notFound = document.querySelector('.not-found');
const getLocationBtn = document.getElementById('getLocation');
const locationDetails = document.querySelector('.location-details');
const loadingScreen = document.querySelector('.loading-screen');
const searchBtn = document.getElementById('searchButton');

// Date and time elements
const currentDateEl = document.getElementById('current-date');
const currentTimeEl = document.getElementById('current-time');
const localTimeEl = document.querySelector('.localtime-value');

// Feature elements
const searchCity = document.getElementById('searchCity');
const searchPostcode = document.getElementById('searchPostcode');
const toggleLocationDetailsBtn = document.getElementById('toggleLocationDetails');
const toggleAirConditionsBtn = document.getElementById('toggleAirConditions');
const returnButton = document.getElementById('returnToDefault');

// Track current search type
let isPostalCode = false;

// Main App Controller
const WeatherApp = (function() {
    'use strict';

    // Constants
    const FAVORITES_KEY = 'weatherFavorites';
    const HISTORY_KEY = 'weatherHistory';
    const DEFAULT_CITY = 'London';
    const MAX_HISTORY_ITEMS = 5;
    const MAX_FAVORITES = 5;
    
    // Remove hardcoded API keys
    // const OPENWEATHER_API_KEY = 'e61e38d5351d8fd3cc3b28f4c8b562cb'; 
    // const WEATHERAPI_KEY = 'd123e9f4d6e741e4942115923253003';
    
    // Cache DOM elements
    const elements = {
        container,
        searchInput,
        currentWeather,
        forecastSection,
        todayForecast,
        hourForecast,
        airConditions,
        notFound,
        getLocationBtn,
        locationDetails,
        loadingScreen,
        searchBtn,
        currentDateEl,
        currentTimeEl,
        localTimeEl,
        searchCity,
        searchPostcode,
        toggleLocationDetailsBtn,
        toggleAirConditionsBtn,
        returnButton
    };

    // Helper function to get day name from day index
    function getDayName(dayIndex) {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const shortDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        
        // For shorter names, use shortDays
        return shortDays[dayIndex] || '';
    }

    // Function to verify API keys are valid
    function verifyAPIKeys() {
        console.log('Verifying API keys...');
        let valid = true;
        
        // Check OpenWeather API key
        if (!OPENWEATHER_API_KEY || OPENWEATHER_API_KEY === 'YOUR_API_KEY' || OPENWEATHER_API_KEY === '') {
            console.error('OpenWeather API key is missing or invalid. Please add your API key in the script.js file.');
            showError('OpenWeather API key is missing. Please check the console for details.');
            valid = false;
        }
        
        // Check WeatherAPI key
        if (!WEATHERAPI_KEY || WEATHERAPI_KEY === 'YOUR_API_KEY' || WEATHERAPI_KEY === '') {
            console.warn('WeatherAPI key might be missing. Fallback functionality may not work properly.');
            // Don't show error here as we might still be able to use OpenWeather
        }
        
        return valid;
    }

    // Function to set loading state of search button
    function setSearchButtonLoading(isLoading) {
        if (!searchBtn) return;
        
        const btnIcon = searchBtn.querySelector('i');
        
        if (isLoading) {
            searchBtn.classList.add('loading');
            btnIcon.classList.remove('fa-arrow-right', 'fa-search');
            btnIcon.classList.add('fa-spinner', 'fa-spin');
        } else {
            searchBtn.classList.remove('loading');
            btnIcon.classList.remove('fa-spinner', 'fa-spin');
            btnIcon.classList.add('fa-arrow-right');
        }
    }

    // Initialize with default city
    document.addEventListener('DOMContentLoaded', () => {
        console.log('DOM loaded, initializing weather app...');
        
        // Hide not found error at startup
        notFound.style.display = 'none';
        
        // Show loading screen
        loadingScreen.style.display = 'flex';
        
        // Initially hide location details (show only air conditions)
        if (locationDetails) {
            locationDetails.style.display = 'none';
        }
        
        // Event listeners for search type radio buttons
        if (searchCity && searchPostcode) {
            searchCity.addEventListener('change', () => {
                console.log('Search by city selected');
                isPostalCode = false;
                searchInput.placeholder = 'Enter city name...';
            });
            
            searchPostcode.addEventListener('change', () => {
                console.log('Search by postal code selected');
                isPostalCode = true;
                searchInput.placeholder = 'Enter postal code...';
            });
        }
        
        // Other event listeners for UI components
        setupEventListeners();
        
        // Start the date/time update
        updateDateTime();
        
        // Load Chennai weather data after a short delay to allow UI to initialize
        setTimeout(() => {
            try {
                console.log('Loading default weather data for Chennai...');
                fetchWeatherData('Chennai', false);
            } catch (error) {
                console.error('Error loading default weather:', error);
                showError('Failed to load initial weather data. Please try again.');
            }
        }, 500);
    });

    // Set up event listeners for UI components
    function setupEventListeners() {
        // Event listener for search button
        if (searchBtn) {
            searchBtn.addEventListener('click', () => {
                const query = searchInput.value.trim();
                if (query === '') {
                    alert('Please enter a city or postal code');
                    return;
                }
                
                console.log(`Search button clicked: ${query} (${isPostalCode ? 'postal code' : 'city'})`);
                loadingScreen.style.display = 'flex';
                setSearchButtonLoading(true);
                fetchWeatherData(query, isPostalCode);
            });
        }
        
        // Event listener for search input (Enter key)
        if (searchInput) {
            searchInput.addEventListener('keyup', (event) => {
                if (event.key === 'Enter') {
                    const query = searchInput.value.trim();
                    if (query === '') return;
                    
                    console.log(`Enter key pressed: ${query} (${isPostalCode ? 'postal code' : 'city'})`);
                    loadingScreen.style.display = 'flex';
                    setSearchButtonLoading(true);
                    fetchWeatherData(query, isPostalCode);
                }
            });
        }
        
        // Event listener for geolocation button
        if (getLocationBtn) {
            getLocationBtn.addEventListener('click', () => {
                console.log('Get location button clicked');
                
                if (navigator.geolocation) {
                    loadingScreen.style.display = 'flex';
                    setSearchButtonLoading(true);
                    navigator.geolocation.getCurrentPosition(
                        position => {
                            const { latitude, longitude } = position.coords;
                            console.log(`Location detected: ${latitude}, ${longitude}`);
                            fetchWeatherDataByCoords(latitude, longitude);
                        },
                        error => {
                            console.error('Error getting location:', error);
                            loadingScreen.style.display = 'none';
                            setSearchButtonLoading(false);
                            
                            if (error.code === 1) {
                                // Permission denied
                                showError('Location access denied. Please allow location access or search manually.');
                            } else if (error.code === 2) {
                                // Position unavailable
                                showError('Unable to determine your location. Please search manually.');
                            } else {
                                // Generic error
                                showError('An error occurred while trying to access your location.');
                            }
                        }
                    );
                } else {
                    alert('Geolocation is not supported by your browser');
                    setSearchButtonLoading(false);
                }
            });
        }
        
        // Toggle buttons for air conditions and location details
        if (toggleLocationDetailsBtn && toggleAirConditionsBtn) {
            toggleLocationDetailsBtn.addEventListener('click', () => {
                airConditions.style.display = 'none';
                locationDetails.style.display = '';
                toggleLocationDetailsBtn.classList.add('active');
                toggleAirConditionsBtn.classList.remove('active');
            });
            
            toggleAirConditionsBtn.addEventListener('click', () => {
                airConditions.style.display = '';
                locationDetails.style.display = 'none';
                toggleAirConditionsBtn.classList.add('active');
                toggleLocationDetailsBtn.classList.remove('active');
            });
        }
        
        // Ensure the return button works properly with enhanced logging
        if (returnButton) {
            returnButton.addEventListener('click', function() {
                console.log("Return to Chennai button clicked");
                
                // Hide error screen
                notFound.style.display = 'none';
                
                // Show loading screen
                loadingScreen.style.display = 'flex';
                
                // Make sure search button shows loading state
                setSearchButtonLoading(true);
                
                // Load Chennai weather with a slight delay
                setTimeout(() => {
                    try {
                        console.log("Fetching Chennai weather...");
                        fetchWeatherData('Chennai', false);
                    } catch (error) {
                        console.error("Error fetching Chennai weather:", error);
                        showError("Failed to load Chennai weather. Please try again.");
                    }
                }, 200);
            });
        } else {
            console.error('Return button not found in DOM');
        }

        // Event listeners for search button hover animation
        if (searchBtn) {
            searchBtn.addEventListener('mouseenter', () => {
                if (!searchBtn.classList.contains('loading')) {
                    const btnIcon = searchBtn.querySelector('i');
                    btnIcon.classList.remove('fa-arrow-right');
                    btnIcon.classList.add('fa-search');
                    
                    // Add class for animation
                    btnIcon.classList.add('icon-change');
                    
                    // Remove class after animation completes
                    setTimeout(() => {
                        btnIcon.classList.remove('icon-change');
                    }, 300);
                }
            });
            
            searchBtn.addEventListener('mouseleave', () => {
                if (!searchBtn.classList.contains('loading')) {
                    const btnIcon = searchBtn.querySelector('i');
                    btnIcon.classList.remove('fa-search');
                    btnIcon.classList.add('fa-arrow-right');
                    
                    // Add class for animation
                    btnIcon.classList.add('icon-change');
                    
                    // Remove class after animation completes
                    setTimeout(() => {
                        btnIcon.classList.remove('icon-change');
                    }, 300);
                }
            });
        }
    }

    // Fetch weather data by coordinates
    async function fetchWeatherDataByCoords(lat, lon) {
        try {
            console.log(`Fetching weather by coordinates: ${lat}, ${lon}`);
            
            // Verify API keys first
            if (!verifyAPIKeys()) {
                return;
            }
            
            // Show loading state
            document.body.style.cursor = 'wait';
            loadingScreen.style.display = 'flex';
            setSearchButtonLoading(true);
            
            // Hide error screen
            notFound.style.display = 'none';
            
            // Add timeout
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 10000);
            
            try {
                // Fetch weather by coordinates with proper URL formatting
                const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat.toFixed(6)}&lon=${lon.toFixed(6)}&units=metric&appid=${OPENWEATHER_API_KEY}`;
                console.log(`Fetching from coordinates URL: ${url}`);
                
                const currentResponse = await fetch(url, { signal: controller.signal });
                clearTimeout(timeoutId);
                
                if (!currentResponse.ok) {
                    if (currentResponse.status === 401 || currentResponse.status === 403) {
                        throw new Error('API key is invalid or unauthorized');
                    } else if (currentResponse.status === 404) {
                        showError('No weather data available for this location.');
                        setSearchButtonLoading(false);
                        return;
                    } else {
                        throw new Error(`HTTP error: ${currentResponse.status}`);
                    }
                }
                
                const currentData = await currentResponse.json();
                
                if (currentData.cod && (currentData.cod === '404' || currentData.cod === 404)) {
                    console.error('Location coordinates invalid:', currentData);
                    showError('Could not find weather data for your location.');
                    setSearchButtonLoading(false);
                    return;
                }
                
                // Success! Use the city name for display
                console.log(`Found location by coordinates: ${currentData.name}`);
                
                // Proceed with regular data fetch using the detected city name
                fetchWeatherData(currentData.name);
                
            } catch (fetchError) {
                clearTimeout(timeoutId);
                console.error('Error fetching by coordinates:', fetchError);
                
                if (fetchError.name === 'AbortError') {
                    showError('Location request timed out. Please check your internet connection.');
                } else {
                    // Try direct geolocation with fallback API
                    try {
                        console.warn('OpenWeather geolocation failed, trying WeatherAPI fallback with coordinates');
                        const weatherAPIUrl = `https://api.weatherapi.com/v1/forecast.json?key=${WEATHERAPI_KEY}&q=${lat},${lon}&days=7&aqi=yes&alerts=no`;
                        
                        const response = await fetch(weatherAPIUrl);
                        const data = await response.json();
                        
                        if (data.error) {
                            throw new Error(data.error.message);
                        }
                        
                        // Update UI with fallback data
                        updateCurrentWeatherFromWeatherAPI(data);
                        updateHourlyForecastFromWeatherAPI(data);
                        updateWeeklyForecastFromWeatherAPI(data);
                        updateAirConditionsFromWeatherAPI(data);
                        updateLocationDetailsFromWeatherAPI(data);
                        
                        // Show weather content
                        notFound.style.display = 'none';
                        currentWeather.style.display = '';
                        forecastSection.style.display = '';
                        todayForecast.style.display = '';
                        airConditions.style.display = '';
                        
                        // Hide loading screen
                        loadingScreen.style.display = 'none';
                        setSearchButtonLoading(false);
                        
                        // Add animations
                        addAnimations();
                        
                    } catch (fallbackError) {
                        console.error('All geolocation attempts failed:', fallbackError);
                        showError('Unable to detect your location. Please search manually.');
                        loadingScreen.style.display = 'none';
                        document.body.style.cursor = 'default';
                        setSearchButtonLoading(false);
                    }
                }
            }
            
        } catch (error) {
            console.error('Unhandled error in coordinates detection:', error);
            showError('Unable to get weather for your location. Please try again.');
            loadingScreen.style.display = 'none';
            document.body.style.cursor = 'default';
            setSearchButtonLoading(false);
        }
    }

    // Fetch weather data
    async function fetchWeatherData(query, isPostalCode = false) {
        try {
            console.log(`Fetching weather data for: ${query}${isPostalCode ? ' (postal code)' : ''}`);
            
            // Verify API keys first
            if (!verifyAPIKeys()) {
                setSearchButtonLoading(false);
                return;
            }
            
            // Show loading state
            document.body.style.cursor = 'wait';
            loadingScreen.style.display = 'flex';
            
            // Hide error screen and reset weather display elements
            notFound.style.display = 'none';
            currentWeather.style.display = 'none';
            forecastSection.style.display = 'none';
            todayForecast.style.display = 'none';
            airConditions.style.display = 'none';
            if (locationDetails) {
                locationDetails.style.display = 'none';
            }
            
            // Construct URL based on search type
            let url;
            if (isPostalCode) {
                url = `https://api.openweathermap.org/data/2.5/weather?zip=${query}&units=metric&appid=${OPENWEATHER_API_KEY}`;
            } else {
                url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${OPENWEATHER_API_KEY}`;
            }
            
            console.log(`Making API request to: ${url}`);
            
            // Add timeout - increase to 15 seconds
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 15000);
            
            try {
                // Fetch current weather data
                const currentResponse = await fetch(url, { signal: controller.signal });
                clearTimeout(timeoutId);
                
                // Handle HTTP errors
                if (!currentResponse.ok) {
                    if (currentResponse.status === 401 || currentResponse.status === 403) {
                        throw new Error('API key is invalid or unauthorized');
                    } else if (currentResponse.status === 404) {
                        showError(`No weather data found for ${isPostalCode ? 'postal code' : 'location'}: ${query}`);
                        setSearchButtonLoading(false);
                        return;
                    } else if (currentResponse.status === 429) {
                        throw new Error('Rate limit exceeded. Too many requests to weather API.');
                    } else {
                        throw new Error(`HTTP error: ${currentResponse.status}`);
                    }
                }
                
                const currentData = await currentResponse.json();
                
                // Check for API-level errors
                if (currentData.cod && (currentData.cod === '404' || currentData.cod === 404)) {
                    console.error('Location not found:', currentData);
                    showError(`Location "${query}" not found. Please check spelling and try again.`);
                    setSearchButtonLoading(false);
                    return;
                }
                
                console.log('Successfully fetched current weather data:', currentData.name);
                
                // Fetch 5-day forecast (3-hour intervals)
                const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${currentData.name}&units=metric&appid=${OPENWEATHER_API_KEY}`);
                
                if (!forecastResponse.ok) {
                    console.warn(`Failed to fetch forecast. Status: ${forecastResponse.status}`);
                    // Continue with current weather only
                }
                
                const forecastData = forecastResponse.ok ? await forecastResponse.json() : null;
                
                // Try to get the One Call API data for hourly forecast
                // First try the newer API 3.0
                let oneCallData = null;
                try {
                    console.log('Attempting to fetch from OneCall API 3.0...');
                    const oneCallResponse = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${currentData.coord.lat}&lon=${currentData.coord.lon}&exclude=minutely,alerts&units=metric&appid=${OPENWEATHER_API_KEY}`);
                    
                    if (oneCallResponse.ok) {
                        oneCallData = await oneCallResponse.json();
                        console.log('Successfully fetched from OneCall API 3.0');
                    } else if (oneCallResponse.status === 401 || oneCallResponse.status === 403) {
                        console.warn('OneCall API 3.0 access unauthorized. Your API key might not have access to this endpoint.');
                        // Continue with other APIs
                    } else {
                        console.warn(`Failed to fetch from OneCall API 3.0. Status: ${oneCallResponse.status}`);
                    }
                } catch (oneCallError) {
                    console.warn('Error fetching from OneCall API 3.0:', oneCallError);
                }
                
                // Fall back to the older API 2.5 if 3.0 failed
                if (!oneCallData) {
                    try {
                        console.log('Attempting to fetch from OneCall API 2.5...');
                        const oneCallResponse = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${currentData.coord.lat}&lon=${currentData.coord.lon}&exclude=minutely,alerts&units=metric&appid=${OPENWEATHER_API_KEY}`);
                        
                        if (oneCallResponse.ok) {
                            oneCallData = await oneCallResponse.json();
                            console.log('Successfully fetched from OneCall API 2.5');
                        } else {
                            console.warn(`Failed to fetch from OneCall API 2.5. Status: ${oneCallResponse.status}`);
                        }
                    } catch (oneCallError) {
                        console.warn('Error fetching from OneCall API 2.5:', oneCallError);
                    }
                }
                
                // Update UI with data
                updateCurrentWeather(currentData);
                updateLocationDetails(currentData);
                
                if (forecastData) {
                    // Try the standard forecast data if OneCall is not available
                    updateWeeklyForecastFromForecast(forecastData);
                }
                
                if (oneCallData) {
                    updateHourlyForecast(oneCallData);
                    updateAirConditions(oneCallData, currentData);
                }
                
                // Show weather content
                currentWeather.style.display = '';
                forecastSection.style.display = '';
                todayForecast.style.display = '';
                airConditions.style.display = '';
                
                // Hide loading screen
                loadingScreen.style.display = 'none';
                document.body.style.cursor = 'default';
                setSearchButtonLoading(false);
                
                // Add animations
                addAnimations();
                
            } catch (error) {
                clearTimeout(timeoutId);
                console.error('Error fetching OpenWeather data:', error);
                
                // Try fallback API
                console.log('Attempting to use fallback API...');
                await fetchWeatherDataFallback(query);
            }
            
        } catch (error) {
            console.error('Unhandled error in fetchWeatherData:', error);
            showError('Failed to fetch weather data. Please try again later.');
            loadingScreen.style.display = 'none';
            document.body.style.cursor = 'default';
            setSearchButtonLoading(false);
        }
    }

    // Fetch weather data from WeatherAPI.com fallback
    async function fetchWeatherDataFallback(query) {
        console.log(`Using fallback API for query: ${query}`);
        
        try {
            // Check if the fallback API key is valid
            if (!WEATHERAPI_KEY || WEATHERAPI_KEY === 'YOUR_API_KEY' || WEATHERAPI_KEY === '') {
                console.error('WeatherAPI.com API key is missing or invalid. Fallback cannot be used.');
                showError('Weather API key is missing. Please check the console for details.');
                setSearchButtonLoading(false);
                return;
            }
            
            // Create API URL with parameters
            const weatherAPIUrl = `https://api.weatherapi.com/v1/forecast.json?key=${WEATHERAPI_KEY}&q=${query}&days=7&aqi=yes&alerts=no`;
            console.log(`Making fallback API request to: ${weatherAPIUrl.substring(0, weatherAPIUrl.indexOf('key=') + 8)}[API_KEY_HIDDEN]`);
            
            // Add timeout
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 10000);
            
            // Make the request with a timeout
            const response = await fetch(weatherAPIUrl, { signal: controller.signal });
            clearTimeout(timeoutId);
            
            // Handle HTTP errors
            if (!response.ok) {
                if (response.status === 401 || response.status === 403) {
                    throw new Error('Fallback API key is invalid or unauthorized');
                } else if (response.status === 404) {
                    showError(`Location "${query}" not found with fallback API. Please check spelling and try again.`);
                    setSearchButtonLoading(false);
                    return;
                } else {
                    throw new Error(`Fallback HTTP error: ${response.status}`);
                }
            }
            
            // Parse response
            const data = await response.json();
            
            // Check for API-level errors
            if (data.error) {
                console.error('Fallback API error:', data.error);
                showError(data.error.message || 'Error with weather data. Please try a different location.');
                setSearchButtonLoading(false);
                return;
            }
            
            console.log('Successfully fetched weather data from fallback API');
            
            // Update UI with the fallback data
            updateCurrentWeatherFromWeatherAPI(data);
            updateHourlyForecastFromWeatherAPI(data);
            updateWeeklyForecastFromWeatherAPI(data);
            updateAirConditionsFromWeatherAPI(data);
            updateLocationDetailsFromWeatherAPI(data);
            
            // Show weather content
            notFound.style.display = 'none';
            currentWeather.style.display = '';
            forecastSection.style.display = '';
            todayForecast.style.display = '';
            airConditions.style.display = '';
            
            // Hide loading screen
            loadingScreen.style.display = 'none';
            document.body.style.cursor = 'default';
            setSearchButtonLoading(false);
            
            // Add animations
            addAnimations();
            
        } catch (error) {
            console.error('Error with fallback API:', error);
            
            if (error.name === 'AbortError') {
                showError('Fallback request timed out. Please check your internet connection.');
            } else {
                showError('All weather data sources failed. Please try again later.');
            }
            
            // Reset UI state
            loadingScreen.style.display = 'none';
            document.body.style.cursor = 'default';
            setSearchButtonLoading(false);
        }
    }

    // Update functions for WeatherAPI data
    function updateCurrentWeatherFromWeatherAPI(data) {
        const current = data.current;
        const location = data.location;
        
        // Update city name
        document.querySelector('.city').textContent = location.name;
        
        // Update temperature
        document.querySelector('.weather-temp').textContent = `${Math.round(current.temp_c)}°C`;
        
        // Update weather description
        document.querySelector('.weather-desc').textContent = current.condition.text;
        
        // Update weather icon
        const weatherIcon = document.querySelector('.weather-icon');
        weatherIcon.src = current.condition.icon;
        weatherIcon.alt = current.condition.text;
        
        // Update feels like
        document.querySelector('.feels-like-value').textContent = `${Math.round(current.feelslike_c)}°C`;
        
        // Update date and time
        const localTime = new Date(location.localtime);
        updateDateTime(localTime);
    }

    function updateHourlyForecastFromWeatherAPI(data) {
        const hourlyContainer = document.querySelector('.hourly-forecast');
        hourlyContainer.innerHTML = '';
        
        // WeatherAPI provides 24 hours of data
        const hours = data.forecast.forecastday[0].hour.slice(0, 8);
        
        hours.forEach(hour => {
            const time = new Date(hour.time);
            const hourTemplate = `
                <div class="hourly-item">
                    <span class="hour">${time.getHours()}:00</span>
                    <img src="${hour.condition.icon}" alt="${hour.condition.text}" class="hourly-icon">
                    <span class="hourly-temp">${Math.round(hour.temp_c)}°C</span>
                </div>
            `;
            hourlyContainer.innerHTML += hourTemplate;
        });
    }

    function updateWeeklyForecastFromWeatherAPI(data) {
        const weeklyContainer = document.querySelector('.weekly-forecast');
        weeklyContainer.innerHTML = '';
        
        // WeatherAPI provides 7 days of forecast data
        const days = data.forecast.forecastday;
        
        if (!days || days.length === 0) {
            console.warn('No forecast days available from WeatherAPI');
            return;
        }
        
        // Get day names
        const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        
        days.forEach((day, index) => {
            const date = new Date(day.date);
            const dayName = index === 0 ? 'Today' : dayNames[date.getDay()];
            
            const forecastDay = document.createElement('div');
            forecastDay.classList.add('forecast-day');
            
            forecastDay.innerHTML = `
                <span class="day-name">${dayName}</span>
                <img src="${day.day.condition.icon}" alt="${day.day.condition.text}" class="day-icon">
                <span class="day-temp">${Math.round(day.day.maxtemp_c)}°/${Math.round(day.day.mintemp_c)}°</span>
            `;
            
            weeklyContainer.appendChild(forecastDay);
        });
    }

    function updateAirConditionsFromWeatherAPI(data) {
        const current = data.current;
        
        // Update real feel
        document.querySelector('.real-feel-value').textContent = `${Math.round(current.feelslike_c)}°C`;
        
        // Update wind
        document.querySelector('.wind-value').textContent = `${current.wind_kph} km/h`;
        
        // Update humidity
        document.querySelector('.humidity-value').textContent = `${current.humidity}%`;
        
        // Update pressure
        document.querySelector('.pressure-value').textContent = `${current.pressure_mb} hPa`;
        
        // Update visibility if available
        document.querySelector('.visibility-value').textContent = `${current.vis_km} km`;
        
        // Update UV index if available
        document.querySelector('.uv-index-value').textContent = current.uv;
    }

    function updateLocationDetailsFromWeatherAPI(data) {
        const location = data.location;
        
        // Update latitude and longitude
        document.querySelector('.lat-value').textContent = location.lat.toFixed(2);
        document.querySelector('.lon-value').textContent = location.lon.toFixed(2);
        
        // Update timezone
        document.querySelector('.timezone-value').textContent = location.tz_id;
        
        // Update local time
        const localTime = new Date(location.localtime);
        document.querySelector('.localtime-value').textContent = 
            `${localTime.toLocaleDateString()} ${localTime.toLocaleTimeString()}`;
    }

    // Update current weather section with OpenWeatherMap data
    function updateCurrentWeather(data) {
        const cityName = document.querySelector('.city-name');
        const weatherCondition = document.querySelector('.weather-condition');
        const currentTemp = document.querySelector('.current-temp');
        const weatherIcon = document.querySelector('.weather-icon');
        
        cityName.textContent = data.name;
        weatherCondition.textContent = `${data.weather[0].description} | Chance of rain: ${calculateRainChance(data)}%`;
        currentTemp.innerHTML = `${Math.round(data.main.temp)}<span class="temp-unit">°</span>`;
        weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
        
        // Update date and time
        updateDateTime(data.timezone);
    }

    // Update date and time display
    function updateDateTime(timezone = 0) {
        const now = new Date();
        
        // For local time calculation with timezone offset (in seconds)
        const localTime = new Date(now.getTime() + timezone * 1000);
        
        // Format date: "Monday, June 10, 2024"
        const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        currentDateEl.textContent = now.toLocaleDateString('en-US', dateOptions);
        
        // Format time: "12:30 PM"
        const timeOptions = { hour: 'numeric', minute: '2-digit', hour12: true };
        currentTimeEl.textContent = now.toLocaleTimeString('en-US', timeOptions);
        
        // Format local time with timezone offset
        localTimeEl.textContent = localTime.toLocaleTimeString('en-US', timeOptions);
        
        // Update time every minute
        setTimeout(updateDateTime, 60000, timezone);
    }

    // Update hourly forecast with OpenWeatherMap data
    function updateHourlyForecast(data) {
        // Clear previous forecast
        hourForecast.innerHTML = '';
        
        // Get forecasts for next 24 hours, 3-hour intervals
        const hourlyData = data.list.slice(0, 8);
        
        hourlyData.forEach(item => {
            const date = new Date(item.dt * 1000);
            const hour = date.getHours();
            const formattedHour = hour === 0 ? '12 AM' : hour === 12 ? '12 PM' : hour < 12 ? `${hour} AM` : `${hour - 12} PM`;
            
            const hourItem = document.createElement('div');
            hourItem.classList.add('hour-item');
            
            hourItem.innerHTML = `
                <span class="hour-time">${formattedHour}</span>
                <img src="https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png" alt="${item.weather[0].description}" class="hour-icon">
                <span class="hour-temp">${Math.round(item.main.temp)}°</span>
            `;
            
            hourForecast.appendChild(hourItem);
        });
    }

    // Update weekly forecast with OpenWeatherMap One Call API data
    function updateWeeklyForecast(data) {
        const weeklyForecast = document.querySelector('.weekly-forecast');
        weeklyForecast.innerHTML = '';
        
        // Get the daily forecasts
        const dailyData = data.daily ? data.daily.slice(0, 7) : [];
        
        // Array of day names
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        
        dailyData.forEach((day, index) => {
            const date = new Date(day.dt * 1000);
            const dayName = index === 0 ? 'Today' : days[date.getDay()];
            
            const forecastDay = document.createElement('div');
            forecastDay.classList.add('forecast-day');
            
            forecastDay.innerHTML = `
                <span class="day-name">${dayName}</span>
                <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="${day.weather[0].description}" class="day-icon">
                <span class="day-temp">${Math.round(day.temp.max)}°/${Math.round(day.temp.min)}°</span>
            `;
            
            weeklyForecast.appendChild(forecastDay);
        });
    }

    // Alternative weekly forecast from 5-day forecast data (free tier)
    function updateWeeklyForecastFromForecast(data) {
        const weeklyForecast = document.querySelector('.weekly-forecast');
        weeklyForecast.innerHTML = '';
        
        // Array of day names
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        
        // Create a map to store daily min/max temperatures
        const dailyData = {};
        
        // Process forecast data to get min/max temps for each day
        data.list.forEach(item => {
            const date = new Date(item.dt * 1000);
            const day = date.toDateString();
            
            if (!dailyData[day]) {
                dailyData[day] = {
                    date: date,
                    min: item.main.temp_min,
                    max: item.main.temp_max,
                    icon: item.weather[0].icon,
                    description: item.weather[0].description
                };
            } else {
                dailyData[day].min = Math.min(dailyData[day].min, item.main.temp_min);
                dailyData[day].max = Math.max(dailyData[day].max, item.main.temp_max);
                // Use noon icon if available (better representation of the day)
                if (date.getHours() === 12) {
                    dailyData[day].icon = item.weather[0].icon;
                    dailyData[day].description = item.weather[0].description;
                }
            }
        });
        
        // Convert to array and sort by date
        const sortedDailyData = Object.values(dailyData).sort((a, b) => a.date - b.date).slice(0, 7);
        
        // Create forecast elements
        sortedDailyData.forEach((day, index) => {
            const dayName = index === 0 ? 'Today' : days[day.date.getDay()];
            
            const forecastDay = document.createElement('div');
            forecastDay.classList.add('forecast-day');
            
            forecastDay.innerHTML = `
                <span class="day-name">${dayName}</span>
                <img src="https://openweathermap.org/img/wn/${day.icon}@2x.png" alt="${day.description}" class="day-icon">
                <span class="day-temp">${Math.round(day.max)}°/${Math.round(day.min)}°</span>
            `;
            
            weeklyForecast.appendChild(forecastDay);
        });
    }

    // Update air conditions section with combined data
    function updateAirConditions(currentData, oneCallData) {
        const realFeel = document.querySelector('.conditions-grid .condition-value:nth-of-type(1)');
        const wind = document.querySelector('.conditions-grid .condition-value:nth-of-type(2)');
        const chanceOfRain = document.querySelector('.conditions-grid .condition-value:nth-of-type(3)');
        const uvIndex = document.querySelector('.conditions-grid .condition-value:nth-of-type(4)');
        
        if (realFeel && wind && chanceOfRain && uvIndex) {
            realFeel.textContent = `${Math.round(currentData.main.feels_like)}°`;
            wind.textContent = `${(currentData.wind.speed).toFixed(1)} km/h`;
            chanceOfRain.textContent = `${calculateRainChance(currentData)}%`;
            uvIndex.textContent = oneCallData.current && oneCallData.current.uvi ? oneCallData.current.uvi.toFixed(0) : "0";
        }
        
        // Update detailed conditions
        updateDetailedConditions(currentData, oneCallData);
    }

    // Update detailed air conditions
    function updateDetailedConditions(currentData, oneCallData) {
        const detailedConditions = document.querySelector('.detailed-conditions');
        
        if (detailedConditions) {
            const detailItems = detailedConditions.querySelectorAll('.detail-item');
            
            // Humidity
            detailItems[0].querySelector('.detail-value span').textContent = `${currentData.main.humidity}%`;
            
            // Pressure
            detailItems[1].querySelector('.detail-value span').textContent = `${currentData.main.pressure} hPa`;
            
            // Visibility
            detailItems[2].querySelector('.detail-value span').textContent = `${(currentData.visibility / 1000).toFixed(1)} km`;
            
            // Dew Point (calculate from temp and humidity if not available)
            const dewPoint = oneCallData.current && oneCallData.current.dew_point ? 
                oneCallData.current.dew_point : 
                calculateDewPoint(currentData.main.temp, currentData.main.humidity);
            
            detailItems[3].querySelector('.detail-value span').textContent = `${Math.round(dewPoint)}°`;
        }
    }

    // Calculate dew point from temperature and humidity
    function calculateDewPoint(temp, humidity) {
        const a = 17.27;
        const b = 237.7;
        
        const alpha = ((a * temp) / (b + temp)) + Math.log(humidity / 100);
        const dewPoint = (b * alpha) / (a - alpha);
        
        return dewPoint;
    }

    // Update location details
    function updateLocationDetails(currentData, oneCallData = null) {
        const locationDetails = document.querySelector('.location-details');
        
        if (locationDetails) {
            const detailItems = locationDetails.querySelectorAll('.location-detail-item');
            
            // Coordinates
            const lat = currentData.coord.lat.toFixed(4);
            const lon = currentData.coord.lon.toFixed(4);
            detailItems[0].querySelector('.location-detail-value').textContent = 
                `${Math.abs(lat)}° ${lat >= 0 ? 'N' : 'S'}, ${Math.abs(lon)}° ${lon >= 0 ? 'E' : 'W'}`;
            
            // Local Time is updated in updateDateTime function
            
            // Sunrise & Sunset
            if (oneCallData && oneCallData.current) {
                const sunrise = new Date(oneCallData.current.sunrise * 1000);
                const sunset = new Date(oneCallData.current.sunset * 1000);
                
                const timeOptions = { hour: 'numeric', minute: '2-digit', hour12: true };
                detailItems[2].querySelector('.location-detail-value').textContent = 
                    sunrise.toLocaleTimeString('en-US', timeOptions);
                detailItems[3].querySelector('.location-detail-value').textContent = 
                    sunset.toLocaleTimeString('en-US', timeOptions);
            } else {
                const sunrise = new Date(currentData.sys.sunrise * 1000);
                const sunset = new Date(currentData.sys.sunset * 1000);
                
                const timeOptions = { hour: 'numeric', minute: '2-digit', hour12: true };
                detailItems[2].querySelector('.location-detail-value').textContent = 
                    sunrise.toLocaleTimeString('en-US', timeOptions);
                detailItems[3].querySelector('.location-detail-value').textContent = 
                    sunset.toLocaleTimeString('en-US', timeOptions);
            }
            
            // Country
            detailItems[4].querySelector('.location-detail-value').textContent = 
                currentData.sys.country || 'Unknown';
            
            // State/Region (may not be available in all API responses)
            detailItems[5].querySelector('.location-detail-value').textContent = 
                currentData.state || (currentData.name !== currentData.sys.country ? currentData.name : 'Unknown');
        }
    }

    // Basic air conditions without One Call API data
    function updateAirConditionsBasic(currentData) {
        const realFeel = document.querySelector('.conditions-grid .condition-value:nth-of-type(1)');
        const wind = document.querySelector('.conditions-grid .condition-value:nth-of-type(2)');
        const chanceOfRain = document.querySelector('.conditions-grid .condition-value:nth-of-type(3)');
        const uvIndex = document.querySelector('.conditions-grid .condition-value:nth-of-type(4)');
        
        if (realFeel && wind && chanceOfRain && uvIndex) {
            realFeel.textContent = `${Math.round(currentData.main.feels_like)}°`;
            wind.textContent = `${(currentData.wind.speed).toFixed(1)} km/h`;
            chanceOfRain.textContent = `${calculateRainChance(currentData)}%`;
            uvIndex.textContent = "N/A"; // UV index requires One Call API
        }
        
        // Update detailed conditions with basic data
        const detailedConditions = document.querySelector('.detailed-conditions');
        
        if (detailedConditions) {
            const detailItems = detailedConditions.querySelectorAll('.detail-item');
            
            // Humidity
            detailItems[0].querySelector('.detail-value span').textContent = `${currentData.main.humidity}%`;
            
            // Pressure
            detailItems[1].querySelector('.detail-value span').textContent = `${currentData.main.pressure} hPa`;
            
            // Visibility
            detailItems[2].querySelector('.detail-value span').textContent = `${(currentData.visibility / 1000).toFixed(1)} km`;
            
            // Dew Point (calculate from temp and humidity)
            const dewPoint = calculateDewPoint(currentData.main.temp, currentData.main.humidity);
            detailItems[3].querySelector('.detail-value span').textContent = `${Math.round(dewPoint)}°`;
        }
    }

    // Add animations to elements
    function addAnimations() {
        const elements = document.querySelectorAll('.current-weather, .forecast-section, .today-forecast, .air-conditions, .location-details');
        
        elements.forEach((element, index) => {
            // Reset animation
            element.style.animation = 'none';
            element.offsetHeight; // Trigger reflow
            
            // Apply animation with delay
            element.style.animation = `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`;
        });
    }

    // Show error message when city not found
    function showError(message = 'Location not found, please try another search.') {
        console.log(`Showing error: ${message}`);
        
        // Update error message
        const errorMessage = document.querySelector('.not-found p');
        if (errorMessage) {
            errorMessage.textContent = message;
        }
        
        // Hide weather content
        currentWeather.style.display = 'none';
        forecastSection.style.display = 'none';
        todayForecast.style.display = 'none';
        airConditions.style.display = 'none';
        locationDetails.style.display = 'none';
        loadingScreen.style.display = 'none';
        
        // Show error screen
        notFound.style.display = 'flex';
        document.body.style.cursor = 'default';
        
        // Reset search button state
        setSearchButtonLoading(false);
        
        // Add some delay to ensure the error appears
        setTimeout(() => {
            // Force repaint to ensure proper display
            notFound.style.opacity = '0.99';
            setTimeout(() => notFound.style.opacity = '1', 10);
        }, 100);
    }

    // Handle orientation changes
    window.addEventListener('orientationchange', () => {
        // Allow time for the browser to adjust the viewport
        setTimeout(() => {
            // Force a reflow to ensure CSS changes take effect
            document.body.style.display = 'none';
            document.body.offsetHeight; // This line forces a reflow
            document.body.style.display = '';
        }, 300);
    });

    // Calculate chance of rain based on OpenWeatherMap data
    function calculateRainChance(data) {
        // OpenWeatherMap doesn't directly provide chance of rain, so we estimate
        // based on humidity and weather conditions
        const humidity = data.main.humidity;
        const weatherId = data.weather[0].id;
        
        // Rain conditions (2xx, 3xx, 5xx)
        if (weatherId >= 200 && weatherId < 600) {
            return Math.min(90, Math.round(humidity * 0.9));
        }
        
        // Cloudy conditions (8xx except 800-clear)
        if (weatherId > 800 && weatherId < 900) {
            return Math.round(humidity * 0.4);
        }
        
        // Clear conditions
        return 0;
    }

    return {
        elements,
        getDayName,
        verifyAPIKeys,
        setSearchButtonLoading,
        fetchWeatherDataByCoords,
        fetchWeatherData,
        fetchWeatherDataFallback,
        updateCurrentWeatherFromWeatherAPI,
        updateHourlyForecastFromWeatherAPI,
        updateWeeklyForecastFromWeatherAPI,
        updateAirConditionsFromWeatherAPI,
        updateLocationDetailsFromWeatherAPI,
        updateCurrentWeather,
        updateDateTime,
        updateHourlyForecast,
        updateWeeklyForecast,
        updateWeeklyForecastFromForecast,
        updateAirConditions,
        updateDetailedConditions,
        calculateDewPoint,
        updateLocationDetails,
        updateAirConditionsBasic,
        addAnimations,
        showError,
        calculateRainChance
    };
})();

// Main App Controller
const weatherApp = new WeatherApp(); 