import Card from './components/Card';
import React from 'react';
import Background from './images/background.jpg';
import Search from './components/Search';
import 'primereact/resources/themes/vela-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
function App() {
  const backgroundStyle = {
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover'
  };
  const getCityNameText = (value) => {
    console.log(value);
  };
  return (
    <div style={backgroundStyle} className="h-screen w-full">
      <Card>
        <div className="container mx-auto p-6">
          <Search searchText={getCityNameText}></Search>
        </div>
      </Card>
    </div>
  );
}

export default App;
