import { connect } from 'react-redux';
import CreateCommentForm from './create_comment_form';
import { createComment } from '../../actions/comment_actions';

const msp = state => ({
    user: state.entities.users[state.session.id]
});

const mdp = dispatch => ({
    createComment: params => dispatch(createComment(params))
});

export default connect(msp, mdp)(CreateCommentForm);