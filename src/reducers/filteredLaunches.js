export const filteredLaunches = (state = [], action) => {
  switch (action.type) {
    case 'STORE_FILTERED_LAUNCHES':
      const { id } = action;

      return [...state, id]
    case 'CLEAR_FILTERED_LAUNCHES':
      return []
    default:
      return state;
  }
};