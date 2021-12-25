// Uma action creator é uma função que
// retorna uma ação ~~ no caso um objeto literal

// Action Creator
export function sum(a, b) {
  return {
    type: 'SUM',
    payload: [a, b],
  };
}

export function subtract(a, b) {
  return {
    type: 'SUBTRACT',
    payload: [a, b],
  };
}
