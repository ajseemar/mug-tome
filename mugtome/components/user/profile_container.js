import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Profile from './profile';

const msp = state => ({
    currentUser: state.entities.users[state.session.id]
});

const ProfileContainer = withRouter(connect(msp, null)(Profile));

export default ProfileContainer