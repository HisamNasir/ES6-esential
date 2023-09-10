'use client'

import { useEffect, useState } from 'react';
import axios from 'axios';

const Task13 = () => {
    const [weather, setWeather] = useState(null);
    useEffect(() => {
        const fetchWeatherTemp = async () => {
            try {
                const response = await axios.get(
                    'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=7f19081882cad7f9dcd400c226cbc151'
                );
                setWeather(response.data);
            } catch (error) {
                console.error('Error', error);
            }
        }; fetchWeatherTemp();
    }, []);
    if (!weather) {
        return (
            <div className='absolute z-10 w-full h-full flex justify-center items-center'>
                <div className='flex space-x-2 text-white'>
                    <div className='animate-pulse'>Loading</div>
                    <div className=' animate-spin'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                    </div>
                </div>
            </div>
        )
    }
    else { const { weather } = weather; }
    return (
        <div className='text-white'>
            <p>Temperature: {Math.round(main.temp - 273.15)}°C</p>
            <p>Weather: {weather[0].description}</p>
        </div>
    );
};

export default Task13;
