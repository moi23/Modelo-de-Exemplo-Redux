export default function (state = false, action) {
  switch (action.type) {
    case 'ATIVA_TOAST':
      return action.payload;

    case 'DESATIVA_TOAST':
      return action.payload;

    default:
      return state;
  }
}
