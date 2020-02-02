import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select'

import './style.css';

const Card = ({bgColor, options, children}) => {
  return (
    <div className="card" style={{backgroundColor: bgColor}} >
      {children} <br/>
      <Select options={options} />
    </div>
  );
};

Card.propTypes = {
  bgColor: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
}

Card.defaultProps = {
  bgColor: '#e33',
};

export default Card;
