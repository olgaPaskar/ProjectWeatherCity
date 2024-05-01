import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WeatherFiveDaysComponent.css';

const FiveDayForecastComponent = () => {
    const [forecastData, setForecastData] = useState(null);

    useEffect(() => {
        const fetchForecastData = async () => {
            try {
                navigator.geolocation.getCurrentPosition(async (position) => {
                    const { latitude, longitude } = position.coords;

                    const response = await axios.get(
                        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=8d2b23833b2282cc7e34989c52989413&units=metric`
                    );
                    setForecastData(response.data);
                });
            } catch (error) {
                console.error('Error fetching forecast data:', error);
            }
        };

        fetchForecastData();
    }, []);

    const groupForecastsByDay = (forecasts) => {
        const groupedForecasts = {};
        forecasts.forEach((forecast) => {
            const date = forecast.dt_txt.split(' ')[0];
            if (!groupedForecasts[date]) {
                groupedForecasts[date] = [forecast];
            } else {
                groupedForecasts[date].push(forecast);
            }
        });
        return groupedForecasts;
    };

    return (
        <div className="forecast-container">
            {forecastData ? (
                <div>
                    {Object.entries(groupForecastsByDay(forecastData.list)).map(([date, forecasts]) => (
                        <div key={date} className="forecast-day">
                            <h3>{date}</h3>
                            <div>
                                <p>Average Temperature: {calculateAverageTemperature(forecasts)} °C</p>
                                <p>Description: {forecasts[0].weather[0].description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading forecast data...</p>
            )}
        </div>
    );
};

const calculateAverageTemperature = (forecasts) => {
    const temperatures = forecasts.map((forecast) => forecast.main.temp);
    const sum = temperatures.reduce((acc, curr) => acc + curr, 0);
    return (sum / temperatures.length).toFixed(1);
};

export default FiveDayForecastComponent;









