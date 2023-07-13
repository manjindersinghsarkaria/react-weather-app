import React from 'react';
import PropTypes from 'prop-types';
const Card = (props) => {
  const classes = props.className ? 'card ' + props.className : 'card';
  return <div className={classes}>{props.children}</div>;
};
Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.object.isRequired
};
export default Card;
