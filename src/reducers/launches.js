export const launches = (state = [], action) => {
  switch (action.type) {
    case 'STORE_LAUNCHES':
      return [...state, {badge: action.badge}];
    default:
      return state;
  }
};