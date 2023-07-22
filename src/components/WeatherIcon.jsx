/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import img01d from './../images/01d.svg';
import img01n from './../images/01n.svg';
import img02d from './../images/02d.svg';
import img02n from './../images/02n.svg';
import img03d from './../images/03d.svg';
import img03n from './../images/03n.svg';
import img04d from './../images/04d.svg';
import img04n from './../images/04n.svg';
import img09d from './../images/09d.svg';
import img09n from './../images/09n.svg';
import img10d from './../images/10d.svg';
import img10n from './../images/10n.svg';
import img11d from './../images/11d.svg';
import img11n from './../images/11n.svg';
import img13d from './../images/13d.svg';
import img13n from './../images/13n.svg';
import img50d from './../images/50d.svg';
import img50n from './../images/50n.svg';
import imgCloudy from './../images/cloudy_moon.svg';
import React from 'react';

import PropTypes from 'prop-types';
const WeatherIcon = (props) => {
  const iconMap = {
    img01d: img01d,
    img01n: img01n,
    img02d: img02d,
    img02n: img02n,
    img03d: img03d,
    img03n: img03n,
    img04d: img04d,
    img04n: img04n,
    img09d: img09d,
    img09n: img09n,
    img10d: img10d,
    img10n: img10n,
    img11d: img11d,
    img11n: img11n,
    img13d: img13d,
    img13n: img13n,
    img50d: img50d,
    img50n: img50n,
    imgCloudy: imgCloudy
  };
  const width = props.width ? props.width : '300px';
  const height = props.width ? props.height : '300px';
  return <img src={iconMap[props.iconName]} width={width} height={height} />;
};
WeatherIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string
};

export default WeatherIcon;
