export const filters = (state = {landSuccess: false, reused: false, reddit: false}, action) => {
  switch (action.type) {
    case 'STORE_FILTER_LAND_SUCCESS':
      return Object.assign(state, {landSuccess: action.boolean})
    case 'STORE_FILTER_REUSED':
      return Object.assign(state, {reused: action.boolean})
    case 'STORE_REDDIT':
      return Object.assign(state, {reddit: action.boolean})
    default:
      return state;
  }
};