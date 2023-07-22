import React, { useState, useEffect } from 'react';
import WeatherIcon from '../WeatherIcon';
import ForeCastCard from './ForeCastCard';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
const InitialSearchCard = (props) => {
  const [iconNameText, setIconNameText] = useState('img02d');
  useEffect(() => {
    const iconText = !isEmpty(props.searchData)
      ? `img${props.searchData?.list[0]?.weather[0].icon}`
      : 'img02d';
    setIconNameText(iconText);
  }, [props.searchData]);

  const searchTextFromChild = (value) => {
    props.searchText(value);
  };

  return (
    <>
      <div className="flex flex-row items-center justify-center">
        <WeatherIcon iconName={iconNameText} />
        <span>
          <h1 className="font-medium text-6xl text-sky-800">
            Weather Forecast
          </h1>
        </span>
      </div>
      <ForeCastCard searchText={searchTextFromChild}></ForeCastCard>
    </>
  );
};
InitialSearchCard.propTypes = {
  searchData: PropTypes.object.isRequired,
  searchText: PropTypes.func.isRequired
};

export default InitialSearchCard;
