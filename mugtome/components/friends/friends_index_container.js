import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FriendIndex from './friends_index';


const msp = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mdp = dispatch => ({

});

const FriendIndexContainer = withRouter(connect(msp, mdp)(FriendIndex));

export default FriendIndexContainer;