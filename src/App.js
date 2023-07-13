import Card from './components/Card';
import React, { useState } from 'react';
import Background from './images/background.jpg';
import Search from './components/Search';
import ForeCastCard from './components/ForeCast/ForeCastCard';
import 'primereact/resources/themes/vela-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import api from './services';
function App() {
  const backgroundStyle = {
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover'
  };
  const [foreCastData, setForeCastData] = useState({});
  const getCityNameText = (value) => {
    api.data
      .getForecastByCity(value)
      .then(({ data }) => {
        console.log(data);
        setForeCastData(data);
      })
      .catch(() => {
        console.log('Error');
      });
  };
  return (
    <div style={backgroundStyle} className="h-screen w-full">
      <Card>
        <div className="container grid justify-center p-6">
          <Search searchText={getCityNameText}></Search>
        </div>
      </Card>
      <ForeCastCard data={foreCastData}></ForeCastCard>
    </div>
  );
}

export default App;
