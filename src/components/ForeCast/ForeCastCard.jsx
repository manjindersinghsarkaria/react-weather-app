import React from 'react';
import PropTypes from 'prop-types';
const ForeCastCard = (props) => {
  const data = props.data;
  console.log(data);
  return (
    <div className="w-[200px] h-[200px] mx-2 rounded bg-white">
      {data.city.name}
    </div>
  );
};
ForeCastCard.propTypes = {
  data: PropTypes.object.isRequired
};
export default ForeCastCard;
