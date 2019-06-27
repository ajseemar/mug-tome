import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CreatePostWidget from './create_post';
import { createPost } from '../../actions/post_actions';

const msp = (state, ownProps) => ({
    post: {
        body: "",
        friend_id: ownProps.match.params.id
    },
    currentUser: state.entities.users[state.session.id]
});

const mdp = dispatch => ({
    createPost: (post) => dispatch(createPost(post))
});

const CreatePostWidgetContainer = withRouter(connect(msp, mdp)(CreatePostWidget));

export default CreatePostWidgetContainer;