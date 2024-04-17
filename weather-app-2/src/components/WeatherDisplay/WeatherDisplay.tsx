import { WeatherData } from "../../types";
import "./WeatherDisplay.css";

interface WeatherDisplayProps {
  weatherData: WeatherData | null;
  error: Error | null;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({
  weatherData,
  error,
}) => {
  if (error) return <div>Failed to load weather data</div>;
  if (!weatherData && !error) return <div>Loading...</div>;
  return (
    <div className="WeatherDisplay">
      <img src={weatherData?.current.condition.icon} alt="Weather Icon" />
      <div className="weather-output">
        <h2>{weatherData?.location.name}</h2>
        <p>{weatherData?.location.localtime}</p>
        <p>{weatherData?.current.temp_c} °C</p>
        <p>Forecast for tomorrow</p>
        <p>max temp {weatherData?.forecast.forecastday[0].day.maxtemp_c} °C</p>
        <p>min temp {weatherData?.forecast.forecastday[0].day.mintemp_c} °C</p>
        <p>
          chance of rain{" "}
          {weatherData?.forecast.forecastday[0].day.daily_chance_of_rain} %
        </p>
      </div>
    </div>
  );
};

export default WeatherDisplay;
