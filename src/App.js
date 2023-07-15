import Card from './components/Card';
import React from 'react';
import Background from './images/background.jpg';
import InitialSearchCard from './components/ForeCast/InitialSearchCard';
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
        <InitialSearchCard />
      </Card>
    </div>
  );
}

export default App;
