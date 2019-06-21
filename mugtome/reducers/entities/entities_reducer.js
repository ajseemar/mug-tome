import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import FriendRequestsReducer from './friend_requests_reducer';

export default combineReducers({
    users: UsersReducer,
    friendRequests: FriendRequestsReducer
});