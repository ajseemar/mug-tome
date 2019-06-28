import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { requestUser } from '../../actions/user_actions';

import PostIndexItem from './post_index_item';
import { requestComments } from '../../actions/comment_actions';

import { createLike, requestLikes, deleteLike } from '../../actions/like_actions';
import { deletePost, requestPost } from '../../actions/post_actions';

const msp = (state, ownProps) => {
    let timelineOwner = null;
    if (ownProps.post.user_id != ownProps.post.friend_id) timelineOwner = state.entities.users[ownProps.post.friend_id];
    return ({
        postOwner: state.entities.users[ownProps.post.user_id],
        user: state.entities.users[state.session.id],
        timelineOwner,
        comments: state.entities.comments,
        users: state.entities.users,
        likes: state.entities.likes
    });
};

const mdp = dispatch => ({
    requestUser: id => dispatch(requestUser(id)),
    deletePost: id => dispatch(deletePost(id)),
    requestComments: params => dispatch(requestComments(params)),
    createLike: params => dispatch(createLike(params)),
    requestLikes: params => dispatch(requestLikes(params)),
    deleteLike: id => dispatch(deleteLike(id)),
    requestPost: id => dispatch(requestPost(id))
});

const PostIndexItemContainer = withRouter(connect(msp, mdp)(PostIndexItem));

export default PostIndexItemContainer;