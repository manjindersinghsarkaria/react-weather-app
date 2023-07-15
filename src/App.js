import Card from './components/Card';
import React, { useState } from 'react';
import Background from './images/background.jpg';
import InitialSearchCard from './components/ForeCast/InitialSearchCard';
import CityWithForecast from './components/CityWithForecast';
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
  const userSearchData = (data) => {
    console.log(data);
    setInitialSearch(isEmpty(data));
    setForecastData(data);
  };
  const getCityNameData = (value) => {
    api.data
      .getForecastByCity(value)
      .then(({ data }) => {
        setForecastData(data);
      })
      .catch(() => {
        console.log('Error');
      });
  };
  const searchOutside = () => {
    if (!isEmpty(forecastData)) {
      return (
        <div className="grid justify-center p-6">
          <Search searchText={getCityNameData}></Search>
        </div>
      );
    }
  };
  return (
    <div style={backgroundStyle} className="h-screen w-full bg-bottom grid">
      {searchOutside()}
      <Card>
        {initialSearch ? (
          <InitialSearchCard searchData={userSearchData} />
        ) : (
          <CityWithForecast searchData={forecastData} />
        )}
      </Card>
    </div>
  );
}

export default App;
