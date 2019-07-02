import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { requestPosts } from '../../actions/post_actions';
import { selectPosts } from '../../reducers/selectors';
import PostIndex from './post_index';
import { requestUser } from '../../actions/user_actions';

const msp = (state, ownProps) => {
    const yoo = ({
        user: state.entities.users[ownProps.user_id],
        posts: selectPosts(state.entities.posts, state.entities.users[ownProps.user_id]),
        modal: state.ui.modal
    });
    // debugger
    return yoo;
}

const mdp = dispatch => ({
    requestPosts: () => dispatch(requestPosts())
});

const PostIndexContainer = withRouter(connect(msp, mdp)(PostIndex));

export default PostIndexContainer;