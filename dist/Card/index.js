import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import './style.css';

const Card = ({
  bgColor,
  options,
  children
}) => {
  return React.createElement("div", {
    className: "card",
    style: {
      backgroundColor: bgColor
    }
  }, children, " ", React.createElement("br", null), React.createElement(Select, {
    options: options
  }));
};

Card.propTypes = {
  bgColor: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object).isRequired
};
Card.defaultProps = {
  bgColor: '#e33'
};
export default Card;