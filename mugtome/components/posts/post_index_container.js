import { connect } from 'react-redux';

import { requestPosts } from '../../actions/post_actions';
import { selectPosts } from '../../reducers/selectors';
import PostIndex from './post_index';

const msp = (state, ownProps) => ({
    user: state.entities.users[ownProps.user_id],
    posts: selectPosts(state.entities.posts, state.entities.users[ownProps.user_id])
});

const mdp = dispatch => ({
    requestPosts: () => dispatch(requestPosts())
});

const PostIndexContainer = connect(msp, mdp)(PostIndex);

export default PostIndexContainer;