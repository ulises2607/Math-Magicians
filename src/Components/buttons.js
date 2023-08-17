import PropTypes from 'prop-types';
import React from 'react';

function DisplayButtons() {
  return (
    <div className="container">
      <input className="input-calc" defaultValue={0} />
      <div className="buttons">

        <CalcButton value="AC" />
        <CalcButton value="+/-" />
        <CalcButton value="%" />
        <CalcButton className="operation" value="/" />

        <CalcButton className="number" value={7} />
        <CalcButton className="number" value={8} />
        <CalcButton className="number" value={9} />
        <CalcButton className="operation" value="x" />

        <CalcButton className="number" value={4} />
        <CalcButton className="number" value={5} />
        <CalcButton className="number" value={6} />
        <CalcButton className="operation" value="-" />

        <CalcButton className="number" value={1} />
        <CalcButton className="number" value={2} />
        <CalcButton className="number" value={3} />
        <CalcButton className="operation" value="+" />

        <CalcButton className="number cero" value="0" />
        <CalcButton value="." />
        <CalcButton className="operation equal" value="=" />
      </div>

    </div>
  );
}
const CalcButton = ({ value, className }) => <button type="button" className={className}>{value}</button>;

CalcButton.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};

CalcButton.defaultProps = {
  value: '',
  className: '',
};

export default DisplayButtons;
