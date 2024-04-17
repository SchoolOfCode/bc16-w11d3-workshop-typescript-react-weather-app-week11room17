import { WeatherData } from "../../types";
import "./WeatherDisplay.css";

interface WeatherDisplayProps {
  weatherData: WeatherData | null;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weatherData }) => {
  return (
    <div className="WeatherDisplay">
      <img src={weatherData?.current.condition.icon} alt="Weather Icon" />
      <div className="weather-output">
        <h2>{weatherData?.location.name}</h2>
        <p>{weatherData?.location.localtime}</p>
        <p>{weatherData?.current.temp_c} °C</p>
      </div>
    </div>
  );
};

export default WeatherDisplay;
