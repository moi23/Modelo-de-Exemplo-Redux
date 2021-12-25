export function ativaToast(status) {
  return {
    type: 'ATIVA_TOAST',
    payload: status,
  };
}

export function desativaToast(status) {
  return {
    type: 'DESATIVA_TOAST',
    payload: status,
  };
}
