import { WeatherData } from "../../types";

interface WeatherDisplayProps {
  weatherData: WeatherData | null;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weatherData }) => {
  return (
    <div className="WeatherDisplay">
      <img src="" alt="Weather Icon" />
      <div>
        <h2>Location</h2>
        <p>Date</p>
        <p>Temperature</p>
      </div>
    </div>
  );
}

export default WeatherDisplay;
