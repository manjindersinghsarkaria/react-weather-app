import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from './WeatherIcon';
const CityWithForecast = (props) => {
  const [iconNameText, setIconNameText] = useState('');
  const [descriptionText, setDescriptionText] = useState('');
  useEffect(() => {
    setIconNameText(`img${props.searchData.list[0].weather[0].icon}`);
    setDescriptionText(props.searchData.list[0].weather[0].description);
  }, [props.searchData]);

  return (
    <>
      <div className="flex flex-row items-center justify-center">
        <WeatherIcon iconName={iconNameText} />
        <div>
          <span className="font-normal text-xl">Today</span>
          <h1 className="font-medium text-6xl text-sky-800">
            {props.searchData.city.name}
          </h1>
          <p>{descriptionText}</p>
        </div>
      </div>
    </>
  );
};
CityWithForecast.propTypes = {
  searchData: PropTypes.object.isRequired
};

export default CityWithForecast;
