import { combineReducers } from 'redux';
import GuestHousesReducer from './reducer_guesthouses';

const rootReducer = combineReducers({
  guesthouses: GuestHousesReducer,
});

export default rootReducer;
