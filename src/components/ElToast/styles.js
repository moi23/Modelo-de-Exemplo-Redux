import styled from 'styled-components';

export const ToastTrueContainer = styled.div`
  height: 30px;
  background: green;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  color: white;
`;

export const ToastFalseContainer = styled.div`
  height: 30px;
  background: red;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  color: white;
`;
