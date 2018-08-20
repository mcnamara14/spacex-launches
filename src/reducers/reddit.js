export const reddit = (state = false, action) => {
  switch (action.type) {
    case 'STORE_REDDIT':
      return action.boolean
    default:
      return state;
  }
};