import { combineReducers } from 'redux';
import { launches } from './launches';
import { filteredLaunchIds } from './filteredLaunchIds';
import { dateSort } from './dateSort';

export const rootReducer = combineReducers({
  launches,
  filteredLaunchIds,
  dateSort
});
