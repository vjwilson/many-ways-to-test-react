import {combineReducers} from 'redux';
import castMembers from './castMembersReducer';
import seats from './seatsReducer';
import user from './userReducer';

const rootReducer = combineReducers({
  castMembers,
  seats,
  user
});

export default rootReducer;
