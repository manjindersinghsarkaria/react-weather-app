import Card from './components/Card';
import React from 'react';
import Background from './images/background.jpg';
import { ReactComponent as Weather } from './images/02d.svg';
import ForeCastCard from './components/ForeCast/ForeCastCard';
import 'primereact/resources/themes/vela-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {
  const backgroundStyle = {
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover'
  };
  return (
    <div style={backgroundStyle} className="h-screen w-full bg-bottom grid">
      <Card>
        <div className="grid grid-cols-2">
          <div>
            <Weather width="300px" height="300px" />
          </div>
          <h1>Weather Forecast</h1>
        </div>
        <ForeCastCard></ForeCastCard>
      </Card>
    </div>
  );
}

export default App;
