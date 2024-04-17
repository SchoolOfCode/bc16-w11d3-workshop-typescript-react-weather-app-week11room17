import WeatherDisplay from "./WeatherDisplay/WeatherDisplay";
import Search from "./Search/Search";
import { WeatherData } from "../types";
import { useState } from "react";
import useSWR from "swr";

const WeatherDashboard = () => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>({
        "location": {
        "name": "London",
        "region": "City of London, Greater London",
        "country": "United Kingdom",
        "lat": 51.52,
        "lon": -0.11,
        "tz_id": "Europe/London",
        "localtime_epoch": 1713358311,
        "localtime": "2024-04-17 13:51"
        },
        "current": {
        "last_updated_epoch": 1713357900,
        "last_updated": "2024-04-17 13:45",
        "temp_c": 10,
        "temp_f": 50,
        "is_day": 1,
        "condition": {
        "text": "Partly cloudy",
        "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
        "code": 1003
        },
        "wind_mph": 11.9,
        "wind_kph": 19.1,
        "wind_degree": 310,
        "wind_dir": "NW",
        "pressure_mb": 1015,
        "pressure_in": 29.97,
        "precip_mm": 0.18,
        "precip_in": 0.01,
        "humidity": 50,
        "cloud": 75,
        "feelslike_c": 7.4,
        "feelslike_f": 45.3,
        "vis_km": 10,
        "vis_miles": 6,
        "uv": 2,
        "gust_mph": 14.3,
        "gust_kph": 23
        }
        });
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    // useSWR would run automatically, what brought error 404, so we need to call useSWR unconditionally
        const { data, error, isLoading } = useSWR(
            location
            ? `https://api.weatherapi.com/v1/current.json?key=45a4ec23736a4bca9dc83500232903&q=${location}`
            : null,
            fetcher
        );
    const handleSearch = async (location: string) => {
        // Get value from search component
        // Perform api call
        console.log(location)
        

        setWeatherData(data);
    }

    return (
        <div className="weather-dashboard">
            <Search onSearch={handleSearch} />
            <WeatherDisplay weatherData={weatherData} />
        </div>
    );

}

export default WeatherDashboard;

