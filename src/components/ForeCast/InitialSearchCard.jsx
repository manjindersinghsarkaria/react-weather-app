import React, { useState } from 'react';
import WeatherIcon from '../WeatherIcon';
import ForeCastCard from './ForeCastCard';
import PropTypes from 'prop-types';
const InitialSearchCard = (props) => {
  const [iconNameText, setIconNameText] = useState('img02d');
  const onUserSearch = (searchData) => {
    props.searchData(searchData);
    setIconNameText(`img${searchData.list[0].weather[0].icon}`);
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
      <ForeCastCard checkSearchTriggered={onUserSearch}></ForeCastCard>
    </>
  );
};
InitialSearchCard.propTypes = {
  searchData: PropTypes.func.isRequired
};

export default InitialSearchCard;
