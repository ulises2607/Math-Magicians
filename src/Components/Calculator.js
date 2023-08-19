import React, { useState } from 'react';
import '../Styles/Calculator.css';
import Button from './Button';
import Screen from './Screen';
import calculate from '../logic/calculate';

function Calculator() {
  const [input, setInput] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const addInput = (val) => {
    setInput(calculate(input, val));
  };

  return (
    <div className="calculator-container">
      <Screen input={input} />
      <div className="row">
        <Button handleClick={addInput}>AC</Button>
        <Button handleClick={addInput}>+/-</Button>
        <Button handleClick={addInput}>%</Button>
        <Button handleClick={addInput}>÷</Button>
      </div>
      <div className="row">
        <Button handleClick={addInput}>7</Button>
        <Button handleClick={addInput}>8</Button>
        <Button handleClick={addInput}>9</Button>
        <Button handleClick={addInput}>x</Button>
      </div>
      <div className="row">
        <Button handleClick={addInput}>4</Button>
        <Button handleClick={addInput}>5</Button>
        <Button handleClick={addInput}>6</Button>
        <Button handleClick={addInput}>-</Button>
      </div>
      <div className="row">
        <Button handleClick={addInput}>1</Button>
        <Button handleClick={addInput}>2</Button>
        <Button handleClick={addInput}>3</Button>
        <Button handleClick={addInput}>+</Button>
      </div>
      <div className="row last">
        <Button handleClick={addInput} className="cero">0</Button>
        <Button handleClick={addInput}>.</Button>
        <Button handleClick={addInput}>=</Button>
      </div>
    </div>
  );
}

export default Calculator;
