import Footer from './components/Footer';
import Header from './components/Header';
import Weather from './components/Weather';
import { useState } from 'react';

function App() {
  const [query, setQuery] = useState(false);
  const [data, setData] = useState({
    name: '',
    temp: '',
    feels: '',
    humidity: '',
    wind: '',
  });
  return (
    <div className="container h-screen flex flex-col">
      <Header setQ={setQuery} setD={setData} />
      <Weather stateQ={query} stateD={data} />
      <Footer />
    </div>
  );
}

export default App;
