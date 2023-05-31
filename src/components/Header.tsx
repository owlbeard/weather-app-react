import { useState } from 'react';
import Logo from '../assets/anime-logo.png';
import Magnify from '../assets/magnify.svg';

type HeaderProps = {
  setQ: React.Dispatch<React.SetStateAction<boolean>>;
  setD: React.Dispatch<
    React.SetStateAction<{
      name: string;
      temp: string;
      feels: string;
      humidity: string;
      wind: string;
    }>
  >;
};

export default function Header({ setQ, setD }: HeaderProps) {
  const [city, setCity] = useState('');
  const fetchWeather = async (c: string) => {
    const body = document.querySelector('body');
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=7d64c2ec5b734e8a82462725232204&q=${c}`,
        { mode: 'cors' }
      );
      const weatherData = await response.json();
      const conduit = weatherData.current.condition.text;
      const item = {
        name: '',
        temp: '',
        feels: '',
        humidity: '',
        wind: '',
      };
      item.name = weatherData.location.name;
      item.temp = `${weatherData.current.temp_c}° ${conduit}`;
      item.feels = `Feels: ${weatherData.current.feelslike_c}°`;
      item.humidity = `Humidity: ${weatherData.current.humidity}`;
      item.wind = `Wind: ${weatherData.current.wind_kph} km/h`;
      setD(item);
      setQ(true);
      if (conduit.includes('loud') || conduit.includes('cast')) {
        body!.className = 'cloudy';
      } else if (
        (conduit.includes('ain') && !conduit.includes('hunder')) ||
        conduit.includes('izzle')
      ) {
        body!.className = 'rainy';
      } else if (conduit.includes('unny') || conduit.includes('lear')) {
        body!.className = 'sunny';
      } else if (conduit.includes('now')) {
        body!.className = 'snowy';
      } else if (conduit.includes('ist')) {
        body!.className = 'misty';
      } else if (conduit.includes('hunder')) {
        body!.className = 'thunder';
      } else {
        body!.className = 'default';
      }
    } catch (err) {
      alert(err);
    }
  };
  return (
    <div className="container text-center flex flex-col sm:justify-between items-center bg-opacity-70">
      <div className="container flex flex-row items-center justify-start-start">
        <img className="h-16" src={Logo} alt="Earth-chan" />
        <div>
          <h1 className="container text-xl sm:text-2xl">
            Earth-chan(アースちゃん)
          </h1>
          <p className="container text-xs sm:text-lg">
            A Weather App for Cuties!
          </p>
        </div>
      </div>
      <div className="container p-2 flex flex-grow sm:justify-center sm:max-w-4xl justify-start items-center gap-2">
        <form
          className="flex flex-grow sm:justify-center sm:max-w-4xl justify-start items-center gap-2"
          action=""
          onChange={(e: React.SyntheticEvent) => {
            const element = e.target as HTMLInputElement;
            const value = element.value;
            setCity(value);
          }}
          onSubmit={(e: React.SyntheticEvent) => {
            e.preventDefault();
            fetchWeather(city);
          }}
        >
          <label htmlFor="search">City:</label>
          <input
            className="container text-black flex-grow"
            type="search"
            name="search"
            id="search"
          />
          <button type="submit">
            <img className="h-12 white" src={Magnify} alt="Magnify" />
          </button>
        </form>
      </div>
    </div>
  );
}
