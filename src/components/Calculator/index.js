import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sum, subtract } from '../../store/Calculator/Calculator.actions';

function Calculator() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const dispatch = useDispatch();

  const result = useSelector(function (state) {
    return state.calculator;
  });

  return (
    <>
      <input
        type="number"
        placeholder="a"
        onChange={(event) => setA(Number(event.target.value))}
        value={a}
      />
      <input
        type="number"
        placeholder="b"
        value={b}
        onChange={(event) => setB(Number(event.target.value))}
      />

      <div>
        <button
          onClick={() => {
            dispatch(sum(a, b));
          }}
        >
          somar
        </button>
        <button onClick={() => dispatch(subtract(a, b))}>subtrair</button>
      </div>

      <div>resultado:{result}</div>
    </>
  );
}

export default Calculator;
