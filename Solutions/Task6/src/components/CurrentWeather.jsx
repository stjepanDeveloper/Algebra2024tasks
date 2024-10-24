export default function CurrentWeather() {
  const weatherData = {
    city: "New York",
    temperature: 22,
    conditions: "Partly Cloudy",
    humidity: 60,
    windSpeed: 5,
  };

  return (
    <div>
      <h1>Functional Component : Current Weather</h1>

      <h2>{weatherData.city}</h2>
      <p>
        Temperature: {weatherData.temperature} C <br />
        Conditions: {weatherData.conditions} <br />
        Humidity: {weatherData.humidity}% <br />
        WindSpeed: {weatherData.windSpeed} m/s
      </p>
    </div>
  );
}
