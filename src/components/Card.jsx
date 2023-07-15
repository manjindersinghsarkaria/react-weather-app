import React from 'react';
import PropTypes from 'prop-types';
const Card = (props) => {
  return (
    <div className="m-auto rounded-3xl bg-transparent border shadow-lg shadow-slate-500 border-slate-200 max-w-4xl w-[896px]">
      {props.children}
    </div>
  );
};
Card.propTypes = {
  children: PropTypes.object.isRequired
};
export default Card;
