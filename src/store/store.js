import { createStore, combineReducers } from 'redux';
// import {} from 'react-redux';
import calculatorReducer from './Calculator/Calculator.reducer';
import toastReducer from './Toast/Toast.reducer';

const rootReducer = combineReducers({
  calculator: calculatorReducer,
  toast: toastReducer,
});

const store = createStore(rootReducer);

export default store;
