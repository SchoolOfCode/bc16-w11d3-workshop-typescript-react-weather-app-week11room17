import WeatherDisplay from "./WeatherDisplay/WeatherDisplay";
import Search from "./Search/Search";
import { useState } from "react";

interface WeatherCondition {
    text: string;
    icon: string;
    code: number;
}

interface CurrentWeather {
    last_updated: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: WeatherCondition;
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    vis_km: number;
    vis_miles: number;
    uv: number;
    gust_mph: number;
    gust_kph: number;
}

interface Location {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
}

interface WeatherData {
    imageSrc: string;
    location: Location;
    temperature: number;
    date: string;
}  

const WeatherDashboard = () => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

    const handleSearch = async (location: string) => {
        // Get value from search component
        // Perform api call
        console.log(location)
    }

    return (
        <div className="weather-dashboard">
            <Search onSearch={handleSearch} />
            <WeatherDisplay weatherData={weatherData} />
        </div>
    );

}

export default WeatherDashboard;