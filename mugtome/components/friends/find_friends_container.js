import { connect } from 'react-redux';
import FindFriends from './find_friends';
import { fetchFriendRequests, createFriendRequest, acceptFriendRequest, deleteFriendRequest } from '../../actions/friend_request_actions';

const msp = state => ({
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users,
    friendRequests: state.entities.friendRequests
});

const mdp = dispatch => ({
    fetchFriendRequests: () => dispatch(fetchFriendRequests()),
    createFriendRequest: req => dispatch(createFriendRequest(req)),
    acceptFriendRequest: req => dispatch(acceptFriendRequest(req)),
    deleteFriendRequest: id => dispatch(deleteFriendRequest(id))
});

const FindFriendsContainer = connect(msp, mdp)(FindFriends);

export default FindFriendsContainer;
