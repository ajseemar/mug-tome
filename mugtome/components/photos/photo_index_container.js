import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PhotoIndex from './photo_index';

const msp = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mdp = dispatch => ({

});

const PhotoIndexContainer = withRouter(connect(msp, mdp)(PhotoIndex));

export default PhotoIndexContainer;