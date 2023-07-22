import Card from './components/Card';
import React, { useState } from 'react';
import Background from './images/background.jpg';
import InitialSearchCard from './components/ForeCast/InitialSearchCard';
import CityWithForecast from './components/CityWithForecast';
import WeatherBoxList from './components/ForeCast/WeatherBoxList';
import Search from './components/Search';
import 'primereact/resources/themes/vela-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import isEmpty from 'lodash/isEmpty';
import api from './services';
function App() {
  const backgroundStyle = {
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover'
  };
  const [initialSearch, setInitialSearch] = useState(true);
  const [forecastData, setForecastData] = useState({});

  const getCityNameData = (value) => {
    api.data
      .getForecastByCity(value)
      .then(({ data }) => {
        setForecastData(data);
        setInitialSearch(isEmpty(data));
      })
      .catch(() => {
        console.log('Error');
      });
  };
  const searchOutside = () => {
    if (!isEmpty(forecastData)) {
      return (
        <div className="grid justify-center p-6 mt-24 mb-8">
          <Search searchText={getCityNameData}></Search>
        </div>
      );
    }
  };
  return (
    <div
      style={backgroundStyle}
      className="h-screen w-full bg-bottom flex flex-col"
    >
      {searchOutside()}
      <div className={initialSearch ? 'm-auto' : 'ml-auto mr-auto'}>
        <Card>
          {initialSearch ? (
            <InitialSearchCard
              searchData={forecastData}
              searchText={getCityNameData}
            />
          ) : (
            <div>
              <CityWithForecast searchData={forecastData} />
              <WeatherBoxList searchData={forecastData} />
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}

export default App;
