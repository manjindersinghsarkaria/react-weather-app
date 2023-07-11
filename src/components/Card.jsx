import React from 'react';
import PropTypes from 'prop-types';
const Card = (props) => {
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;
};
Card.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};
export default Card;
