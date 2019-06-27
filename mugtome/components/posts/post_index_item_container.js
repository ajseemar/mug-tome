import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { requestUser } from '../../actions/user_actions';

import PostIndexItem from './post_index_item';

// import PostIndexItem from './post_index_item';
// import { requestUser } from '../../actions/users';
// import { deletePost } from '../../actions/posts';
// import { createLike } from '../../actions/likes';

const msp = (state, ownProps) => {
    let timelineOwner = null;
    if (ownProps.post.user_id != ownProps.post.friend_id) timelineOwner = state.entities.users[ownProps.post.friend_id];
    return ({
        postOwner: state.entities.users[ownProps.post.user_id],
        user: state.entities.users[state.session.id],
        timelineOwner
    });
};

const mdp = dispatch => ({
    requestUser: id => dispatch(requestUser(id)),
    deletePost: id => dispatch(deletePost(id)),
    // createLike: like => dispatch(createLike(like))
});

const PostIndexItemContainer = withRouter(connect(msp, mdp)(PostIndexItem));

export default PostIndexItemContainer;