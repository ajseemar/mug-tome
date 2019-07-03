import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CreateCommentForm from './create_comment_form';
import { createComment } from '../../actions/comment_actions';
import { requestPost } from '../../actions/post_actions';

const msp = state => ({
    user: state.entities.users[state.session.id]
});

const mdp = dispatch => ({
    createComment: params => dispatch(createComment(params)),
    requestPost: id => dispatch(requestPost(id))
});

export default withRouter(connect(msp, mdp)(CreateCommentForm));