import {combineReducers} from 'redux';
import user from './userReducer';
import seats from './seatsReducer';

const rootReducer = combineReducers({
  user,
  seats
});

export default rootReducer;
