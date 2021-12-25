import React from 'react';
import 'animate.css';

import { ToastTrueContainer, ToastFalseContainer } from './styles';

import { useSelector } from 'react-redux';

function ElToast() {
  const result = useSelector((state) => state.toast);
  return (
    <>
      {result ? (
        <ToastTrueContainer className="animate__animated animate__fadeInUp">
          <h4>Toast True</h4>
        </ToastTrueContainer>
      ) : (
        <ToastFalseContainer className="animate__animated animate__fadeInUp">
          <h4>Toast False</h4>
        </ToastFalseContainer>
      )}
    </>
  );
}

export default ElToast;
