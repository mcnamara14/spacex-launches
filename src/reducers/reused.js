export const reused = (state = false, action) => {
  switch (action.type) {
    case 'STORE_REUSED':
      return action.boolean
    default:
      return state;
  }
};