import { useEffect, useState } from "react";

export const WeatherApp = () => {
  const [city, setCity] = useState("Delhi");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=28.6&longitude=77.2&current_weather=true`)
      .then(res => res.json())
      .then(d => {
        setData(d.current_weather);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h2>Weather</h2>
      {loading ? "Loading..." :
        data && <p>Temp: {data.temperature}°C</p>}
    </>
  );
};