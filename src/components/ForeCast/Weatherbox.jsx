import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from '../WeatherIcon';
const Weatherbox = (props) => {
  const [iconNameText, setIconNameText] = useState('');
  const [dayName, setDayName] = useState('');
  const [temp, setTemp] = useState('');
  useEffect(() => {
    setIconNameText(`img${props.boxData.icon}`);
    setDayName(getDayName());
    setTemp(Math.ceil(props.boxData.temp));
  }, [props.boxData]);
  const getDayName = () => {
    const dateObject = new Date(props.boxData.date);

    // Get the name of the day using toLocaleString() with 'en-US' locale
    const dayName = dateObject.toLocaleString('en-US', { weekday: 'long' });
    return dayName;
  };
  return (
    <div className="flex  flex-col items-center rounded-3xl w-[180px] h-[180px] border m-2 text-xl p-2">
      <div>{dayName}</div>
      <div>
        <WeatherIcon iconName={iconNameText} width="100px" height="100px" />
      </div>
      <div>{temp}°C</div>
    </div>
  );
};

Weatherbox.propTypes = {
  boxData: PropTypes.object.isRequired
};

export default Weatherbox;
