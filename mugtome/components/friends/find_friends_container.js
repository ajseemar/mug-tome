import { connect } from 'react-redux';
import FindFriends from './find_friends';
import { fetchFriendRequests, createFriendRequest } from '../../actions/friend_actions';

const msp = state => ({
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users,
    friendRequests: state.entities.friendRequests
});

const mdp = dispatch => ({
    fetchFriendRequests: () => dispatch(fetchFriendRequests()),
    createFriendRequest: req => dispatch(createFriendRequest(req))
});

const FindFriendsContainer = connect(msp, mdp)(FindFriends);

export default FindFriendsContainer;
