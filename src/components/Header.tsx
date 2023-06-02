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
      const condition = weatherData.current.condition.text;
      const item = {
        name: '',
        temp: '',
        feels: '',
        humidity: '',
        wind: '',
      };
      item.name = weatherData.location.name;
      item.temp = `${weatherData.current.temp_c}° ${condition}`;
      item.feels = `Feels: ${weatherData.current.feelslike_c}°`;
      item.humidity = `Humidity: ${weatherData.current.humidity}`;
      item.wind = `Wind: ${weatherData.current.wind_kph} km/h`;
      setD(item);
      setQ(true);
      if (condition.includes('loud') || condition.includes('cast')) {
        body!.className = 'cloudy';
      } else if (
        (condition.includes('ain') && !condition.includes('hunder')) ||
        condition.includes('izzle')
      ) {
        body!.className = 'rainy';
      } else if (condition.includes('unny') || condition.includes('lear')) {
        body!.className = 'sunny';
      } else if (condition.includes('now')) {
        body!.className = 'snowy';
      } else if (condition.includes('ist')) {
        body!.className = 'misty';
      } else if (condition.includes('hunder')) {
        body!.className = 'thunder';
      } else {
        body!.className = 'default';
      }
    } catch (err) {
      alert(err);
    }
  };
  return (
<div className=" bg-chan text-center flex flex-col w-full sm:w-auto sm:flex-row items-center sm:gap-12">
      <div className=" flex items-center justify-start">
        <img className="h-16" src={Logo} alt="Earth-chan" />
        <div>
          <h1 className=" text-xl sm:text-2xl">Earth-chan(アースちゃん)</h1>
          <p className="text-xs sm:text-lg">A Weather App for Cuties!</p>
        </div>
      </div>
      <div className="p-2 flex flex-grow w-full sm:max-w-5xl justify-center items-center gap-2">
        <form
          className="flex flex-grow justify-center items-center gap-2"
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
            className=" text-black flex-grow sm:p-2 p-1 rounded-lg"
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
