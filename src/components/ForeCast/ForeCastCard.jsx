import React from 'react';
import PropTypes from 'prop-types';
import api from '../../services';
import Search from '../Search';
const ForeCastCard = (props) => {
  const getCityNameData = (value) => {
    api.data
      .getForecastByCity(value)
      .then(({ data }) => {
        props.checkSearchTriggered(data);
      })
      .catch(() => {
        console.log('Error');
      });
  };

  return (
    <div className="grid justify-center p-6">
      <Search searchText={getCityNameData}></Search>
    </div>
  );
};

ForeCastCard.propTypes = {
  checkSearchTriggered: PropTypes.func.isRequired
};

export default ForeCastCard;
