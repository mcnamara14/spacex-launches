import { combineReducers } from 'redux';
import { launches } from './launches';
import { landSuccess } from './landSuccess';
import { reddit } from './reddit';
import { reused } from './reused';

export const rootReducer = combineReducers({
  launches,
  landSuccess,
  reddit,
  reused
});
