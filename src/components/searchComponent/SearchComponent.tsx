import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SearchComponent.css';

const SearchComponent = ({ onSubmit }) => {
    const [city, setCity] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const fetchSuggestions = async () => {
            try {
                const response = await axios.get(`https://api.api-ninjas.com/v1/city?name=${city}`, {
                    headers: {
                        'X-Api-Key': 'h9zkqVbQxALqUNAb+1T/zQ==elcSBu4esz5icYRP'
                    }
                });
                setSuggestions(response.data);
            } catch (error) {
                console.error('Error fetching city suggestions:', error);
            }
        };

        if (city.trim() !== '') {
            fetchSuggestions();
        } else {
            setSuggestions([]);
        }
    }, [city]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(city);
        setCity('');
        setSuggestions([]);
    };

    const handleSuggestionClick = (selectedCity) => {
        setCity(selectedCity);
        setSuggestions([]);
    };

    useEffect(() => {
        const searchBtn = document.getElementById('search-button');
        const cityInput = document.getElementById('city-input');

        searchBtn.addEventListener('click', () => {
            const city = cityInput.value;
            if (city.trim() !== '') {
                const api = '8d2b23833b2282cc7e34989c52989413';
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        displayWeather(data);
                    })
                    .catch(error => {
                        console.error('Error fetching weather data:', error);
                    });
            } else {
                alert('Please enter a city name');
            }
        });

        function displayWeather(data) {
            const weatherInfo = document.getElementById('weather-info');
            weatherInfo.innerHTML = `
                <h2>${data.name}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Description: ${data.weather[0].description}</p>
            `;
        }

    }, []);

    return (
        <div>
            <form className="SearchComponent" onSubmit={handleSubmit}>
                <input
                    id="city-input"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter city name"
                />
                <button id="search-button" type="submit">Search</button>
                <ul className="suggestions">
                    {suggestions.map((suggest) => (
                        <li key={suggest.id} onClick={() => handleSuggestionClick(suggest.name)}>
                            {suggest.name}
                        </li>
                    ))}
                </ul>
            </form>
        </div>
    );
};

export default SearchComponent;















