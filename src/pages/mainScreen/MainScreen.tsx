import React, { useState } from 'react';
import SearchComponent from '../../components/searchComponent/SearchComponent';
import WeatherComponent from '../../components/weatherComponent/WeatherComponent';
import DrawerComponent from '../../components/drawerComponent/DrawerComponent';
import WeatherFiveDaysComponent from "../../components/weatherFiveDaysComponent/WeatherFiveDaysComponent";
import './MainScreen.css';


const MainScreen: React.FC = () => {

    const [weatherData, setWeatherData] = useState(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const fetchWeatherData = async (city) => {
        const apiKey = '8d2b23833b2282cc7e34989c52989413';
        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Failed to fetch weather data');
            }
            const data = await response.json();
            setWeatherData(data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <div className={`main-screen`}>
            <div className="search-component-container">
                <SearchComponent onSubmit={fetchWeatherData} />
            </div>
            <div className="weather-component-container">
                <WeatherComponent weatherData={weatherData} />
                <WeatherFiveDaysComponent />
            </div>
            <div className="burger-menu-container">
                <button className="burger-menu-button" onClick={toggleDrawer}>
                    ☰
                </button>
                <DrawerComponent isOpen={isDrawerOpen} onClose={toggleDrawer} />
            </div>
        </div>
    );
};

export default MainScreen;

























