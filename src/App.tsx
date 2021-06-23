//Components
import Location from './components/Location';
import Navbar from './components/Navbar';
import WeatherData from './components/WeatherData';

function App(): JSX.Element {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Weather Application</h1>
        </header>
        <Navbar />
        <Location />
        <WeatherData />
      </div>
    </div>
  );
}

export default App;
