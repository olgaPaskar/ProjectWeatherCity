import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WeatherComponent.css';

const WeatherComponent = ({ weatherData }) => {
    const [currentWeather, setCurrentWeather] = useState(null);

    useEffect(() => {
        const fetchCurrentWeather = async () => {
            try {
                navigator.geolocation.getCurrentPosition(async (position) => {
                    const { latitude, longitude } = position.coords;

                    const response = await axios.get(
                        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=8d2b23833b2282cc7e34989c52989413&units=metric`
                    );
                    setCurrentWeather(response.data);
                });
            } catch (error) {
                console.error('Error fetching current weather:', error);
            }
        };

        fetchCurrentWeather();
    }, []);

    return (
        <div className="weather-info-container">
            <h2>Current Weather</h2>
            {currentWeather ? (
                <>
                    <p>Location: {currentWeather.name}</p>
                    <p>Temperature: {currentWeather.main && currentWeather.main.temp} °C</p>
                    <p>Description: {currentWeather.weather && currentWeather.weather[0].description}</p>
                </>
            ) : (
                <p>Loading current weather...</p>
            )}
            <hr />
            {weatherData && (
                <>
                    <div id="weather-info"/>
                </>
            )}
        </div>
    );
};

export default WeatherComponent;

