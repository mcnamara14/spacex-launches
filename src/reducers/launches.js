export const launches = (state = [], action) => {
  switch (action.type) {
    case 'STORE_LAUNCHES':
      const { badge, name, launchType, date, details, id, article, landSuccess, reused, reddit } = action;

      return [...state, {badge, name, type: launchType, date, details, id, article, landSuccess, reused, reddit }]
    case 'CLEAR_LAUNCHES':
      return [];
    default:
      return state;
  }
};