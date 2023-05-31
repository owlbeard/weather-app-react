type WeatherProps = {
  stateQ: boolean;
  stateD: {
    name: string;
    temp: string;
    feels: string;
    humidity: string;
    wind: string;
  };
};

export default function Weather({ stateQ, stateD }: WeatherProps) {
  return (
    <div className="container flex flex-grow justify-center items-center">
      {stateQ ? (
        <div className="p-4 flex flex-col rounded-xl gap-4 items-center bg-gray-800 bg-opacity-60 hover:scale-110 transition-transform">
          <h1 className="text-3xl sm:text-6xl">{stateD.name}</h1>
          <h2 className="text-2xl sm:text-4xl">{stateD.temp}</h2>
          <h4 className="text-lg sm:text-3xl">{stateD.feels}</h4>
          <h4 className="text-lg sm:text-3xl">{stateD.humidity}</h4>
          <h4 className="text-lg sm:text-3xl">{stateD.wind}</h4>
        </div>
      ) : (
        <p className="text-xl sm:text-4xl">Please search any city you like!</p>
      )}
    </div>
  );
}
