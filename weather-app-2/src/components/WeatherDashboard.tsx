import WeatherDisplay from "./WeatherDisplay/WeatherDisplay";
import Search from "./Search/Search";
import { WeatherData } from "../types";
import { useState } from "react";
import useSWR from "swr";
import "./WeatherDashboard.css";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const WeatherDashboard = () => {
  const [locationQuery, setLocationQuery] = useState<string>("London");

  // useSWR would run automatically, what brought error 404, so we need to call useSWR unconditionally
  const { data, error } = useSWR<WeatherData, Error>(
    `https://api.weatherapi.com/v1/current.json?key=45a4ec23736a4bca9dc83500232903&q=${locationQuery}`,
    fetcher
  );
  const handleSearch = (newLocation: string) => {
    // Get value from search component
    // Perform api call

    setLocationQuery(newLocation);
  };

  if (error) return <div>Failed to load weather data</div>;
  if (!data && !error) return <div>Loading...</div>;

  return (
    <div className="weather-dashboard">
      <Search onSearch={handleSearch} />
      <WeatherDisplay weatherData={data || null} />
    </div>
  );
};

export default WeatherDashboard;
