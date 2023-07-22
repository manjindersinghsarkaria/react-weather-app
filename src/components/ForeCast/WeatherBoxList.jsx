import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Weatherbox from './Weatherbox';
const WeatherboxList = (props) => {
  const [weatherBoxData, setWeatherBoxData] = useState({
    days: []
  });
  useEffect(() => {
    setWeatherBoxData(weatherBoxDataState(props.searchData));
  }, [props.searchData]);
  useEffect(() => {
    console.log(props.searchData);
    console.log(weatherBoxData);
  }, [weatherBoxData]);

  const getDayIndices = (data) => {
    let dayIndices = [];
    dayIndices.push(0);

    let index = 0;
    let tmp = data.list[index].dt_txt.slice(8, 10);

    for (let i = 0; i < 4; i++) {
      while (
        tmp === data.list[index].dt_txt.slice(8, 10) ||
        data.list[index].dt_txt.slice(11, 13) !== '15'
      ) {
        index++;
      }
      dayIndices.push(index);
      tmp = data.list[index].dt_txt.slice(8, 10);
    }
    return dayIndices;
  };

  const weatherBoxDataState = (data) => {
    const days = [];
    const dayIndices = getDayIndices(data);

    for (let i = 1; i < 5; i++) {
      days.push({
        date: data.list[dayIndices[i]].dt_txt,
        weather_desc: data.list[dayIndices[i]].weather[0].description,
        icon: data.list[dayIndices[i]].weather[0].icon,
        temp: data.list[dayIndices[i]].main.temp
      });
    }
    return {
      days: days
    };
  };

  return (
    <>
      <div className="flex flex-row items-center justify-center weatherboxList">
        {weatherBoxData.days.map((item, index) => {
          return <Weatherbox key={index} boxData={item} />;
        })}
      </div>
    </>
  );
};
WeatherboxList.propTypes = {
  searchData: PropTypes.object.isRequired
};

export default WeatherboxList;
