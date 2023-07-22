import React from 'react';
import PropTypes from 'prop-types';
// import api from '../../services';
import Search from '../Search';
const ForeCastCard = (props) => {
  const getCityNameData = (value) => {
    props.searchText(value);
  };

  return (
    <div className="flex items-center my-6">
      <Search searchText={getCityNameData}></Search>
    </div>
  );
};

ForeCastCard.propTypes = {
  searchText: PropTypes.func.isRequired
};

export default ForeCastCard;
