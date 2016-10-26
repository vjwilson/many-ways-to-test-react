import {combineReducers} from 'redux';
import castMembers from './castMembersReducer';
import seats from './seatReducer';
import user from './userReducer';

const rootReducer = combineReducers({
  castMembers,
  seats,
  user
});

export default rootReducer;
