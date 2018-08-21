export const dateSort = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_DATE_SORT':
    return state === false ? true : false;
    default:
      return state;
  }
};