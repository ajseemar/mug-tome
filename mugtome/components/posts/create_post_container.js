import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CreatePostWidget from './create_post';
import { createPost, requestPosts } from '../../actions/post_actions';
import { closeModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => ({
    post: {
        body: "",
        friend_id: ownProps.id
    },
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.post
});

const mdp = dispatch => ({
    createPost: (post) => dispatch(createPost(post)),
    closeModal: () => dispatch(closeModal()),
    requestPosts: () => dispatch(requestPosts())
});

const CreatePostWidgetContainer = withRouter(connect(msp, mdp)(CreatePostWidget));

export default CreatePostWidgetContainer;