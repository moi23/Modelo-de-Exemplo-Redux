import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import store from './store/store';

import ElToast from './components/ElToast';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ElToast />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
