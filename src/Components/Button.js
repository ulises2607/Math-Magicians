import React from 'react';
import '../Styles/Button.css';
import PropTypes from 'prop-types';

function Button({ children, handleClick }) {
  /* eslint-disable-next-line no-restricted-globals  */
  const isOperator = (value) => (isNaN(value) && (value !== '.') && (value !== 'AC') && (value !== '+/-') && (value !== '%'));
  return (
    <div
      role="button"
      tabIndex={0}
      className={`button-container ${isOperator(children) ? 'operator' : ''}`.trimEnd()}
      onClick={() => handleClick(children)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleClick(children);
        }
      }}
    >
      {children}
    </div>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
