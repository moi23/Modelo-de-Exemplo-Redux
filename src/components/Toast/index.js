import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ativaToast, desativaToast } from '../../store/Toast/Toast.actions';

function Toast() {
  const dispatch = useDispatch();

  const result = useSelector(function (state) {
    return state.toast;
  });
  return (
    <>
      <h1>Toastinho *-*</h1>
      <h2>status do toast:{String(result)}</h2>
      <div>
        <button onClick={() => dispatch(ativaToast(true))}> Toast</button>
        <button onClick={() => dispatch(desativaToast(false))}>
          Desativa Toast
        </button>
      </div>
    </>
  );
}

export default Toast;
