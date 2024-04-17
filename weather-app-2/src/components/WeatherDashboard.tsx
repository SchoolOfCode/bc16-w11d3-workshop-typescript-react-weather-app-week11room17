import WeatherDisplay from "./WeatherDisplay/WeatherDisplay";
import Search from "./Search/Search";
import { WeatherData } from "../types";
import { useState } from "react";

const WeatherDashboard = () => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

    const handleSearch = async (location: string) => {
        // Get value from search component
        // Perform api call
        console.log(location)

        setWeatherData(null);
    }

    return (
        <div className="weather-dashboard">
            <Search onSearch={handleSearch} />
            <WeatherDisplay weatherData={weatherData} />
        </div>
    );

}

export default WeatherDashboard;