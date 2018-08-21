export const filteredLaunchIds = (state = [], action) => {
  switch (action.type) {
    case 'STORE_FILTERED_LAUNCH_IDS':
      const { id } = action;
      const newState = [...state, id];
      return newState
    case 'CLEAR_FILTERED_LAUNCH_IDS':
      return []
    default:
      return state;
  }
};