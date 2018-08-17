export const launches = (state = [], action) => {
  switch (action.type) {
    case 'STORE_LAUNCHES':
      const { badge, name, launchType, date, details, id, article } = action;

      return [...state, {badge, name, type: launchType, date, details, id, article}]
    default:
      return state;
  }
};