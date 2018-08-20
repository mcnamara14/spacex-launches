import { combineReducers } from 'redux';
import { launches } from './launches';
import { filters } from './filters';

export const rootReducer = combineReducers({
  launches,
  filters
});
