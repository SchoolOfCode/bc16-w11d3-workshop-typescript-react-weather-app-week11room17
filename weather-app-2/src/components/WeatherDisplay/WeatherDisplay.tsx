interface WeatherData {
  imageSrc: string;
  location: string;
  temperature: string;
  date: string;
}

interface WeatherDisplayProps {
  weatherData: WeatherData | null;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weatherData }) => {
  return (
    <div className="WeatherDisplay">
      <img src={weatherData?.imageSrc} alt="Weather Icon" />
      <div>
        <h2>{weatherData?.location}</h2>
        <p>{weatherData?.temperature}</p>
        <p>{weatherData?.date}</p>
      </div>
    </div>
  );
}

export default WeatherDisplay;
