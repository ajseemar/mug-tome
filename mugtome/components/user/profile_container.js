import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Profile from './profile';
import { openModal } from '../../actions/modal_actions';
import { requestUser } from '../../actions/user_actions';

const msp = state => ({
    currentUser: state.entities.users[state.session.id],
});

const mdp = dispatch => ({
    openModal: component => dispatch(openModal(component)),
    closeModal: () => dispatch(closeModal()),
    requestUser: (id) => dispatch(requestUser(id))
});

const ProfileContainer = withRouter(connect(msp, mdp)(Profile));

export default ProfileContainer