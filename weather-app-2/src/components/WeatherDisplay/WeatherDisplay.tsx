import { WeatherData } from "../../types";
import "./WeatherDisplay.css";

interface WeatherDisplayProps {
  weatherData: WeatherData | null;
  error: Error | null;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({  weatherData,  error,}) => {
  if (error) return <div>Failed to load weather data</div>;
  if (!weatherData && !error) return <div>Loading...</div>;
  return (
    <>
        <WeatherDisplayCard 
            icon={weatherData?.current.condition.icon}
            name={weatherData?.location.name} 
            localTime={weatherData?.location.localtime}
            tempC={weatherData?.current.temp_c}
        />
    </>
  );
};

export default WeatherDisplay;


const WeatherDisplayCard = ({icon, name, localTime, tempC}) => {
    return (
        <div className="weather__display">
          <img src={icon} alt="Weather Icon" />
          <div className="weather-output">
            <h2>{name}</h2>
            <p>{localTime}</p>
            <p>{tempC} °C</p>
          </div>
        </div>
    )
}