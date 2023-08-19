import React from 'react';
import '../Styles/Screen.css';
import PropTypes from 'prop-types';

const Screen = ({ input }) => (

  <div className="input">
    {input.next || input.total || '0'}
  </div>
);

Screen.propTypes = {
  input: PropTypes.shape({
    next: PropTypes.string,
    total: PropTypes.string,
  }).isRequired,
};

export default Screen;
