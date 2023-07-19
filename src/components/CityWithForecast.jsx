import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from './WeatherIcon';
const CityWithForecast = (props) => {
  const [iconNameText, setIconNameText] = useState('');
  const [descriptionText, setDescriptionText] = useState('');
  const [city, setCity] = useState({});
  const [main, setMain] = useState({});
  useEffect(() => {
    setIconNameText(`img${props.searchData.list[0].weather[0].icon}`);
    setDescriptionText(props.searchData.list[0].weather[0].description);
    setCity(props.searchData.city);
    setMain(props.searchData.list[0].main);
  }, [props.searchData]);

  return (
    <>
      <div className="flex flex-row items-center justify-center">
        <WeatherIcon iconName={iconNameText} />
        <div>
          <span className="font-normal text-xl mb-3">Today</span>
          <h1 className="font-medium mb-3 text-6xl text-sky-800">
            {city.name}
          </h1>

          <p className="mb-3">
            Temperature: {main.temp}
            °C
          </p>
          <p className="mb-3">{descriptionText}</p>
        </div>
      </div>
    </>
  );
};
CityWithForecast.propTypes = {
  searchData: PropTypes.object.isRequired
};

export default CityWithForecast;
