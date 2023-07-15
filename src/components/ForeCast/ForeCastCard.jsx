import React, { useState } from 'react';

import api from '../../services';
import Search from '../Search';
import isEmpty from 'lodash/isEmpty';
const ForeCastCard = () => {
  const [foreCastData, setForeCastData] = useState({});
  const getCityNameText = (value) => {
    api.data
      .getForecastByCity(value)
      .then(({ data }) => {
        console.log(data);
        setForeCastData(data);
      })
      .catch(() => {
        console.log('Error');
      });
  };
  console.log(foreCastData);
  console.log(isEmpty(foreCastData));
  return (
    <div className="grid justify-center p-6">
      <Search searchText={getCityNameText}></Search>
    </div>
  );
};

export default ForeCastCard;
