export const landSuccess = (state = false, action) => {
  switch (action.type) {
    case 'STORE_LAND_SUCCESS':
      return action.boolean
    default:
      return state;
  }
};