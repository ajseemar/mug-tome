import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import FriendRequestsReducer from './friend_requests_reducer';
import PostsReducer from './posts_reducer';
import CommentsReducer from './comments_reducer';
import LikesReducer from './likes_reducer';

export default combineReducers({
    users: UsersReducer,
    friendRequests: FriendRequestsReducer,
    posts: PostsReducer,
    comments: CommentsReducer,
    likes: LikesReducer
});