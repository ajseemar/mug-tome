import { connect } from 'react-redux';
import CommentIndex from './comment_index';

const msp = (state, ownProps) => ({
    // comments: state.entities.comments,
    commentIds: ownProps.commentIds
});


const mdp = dispatch => ({

});

const CommentIndexContainer = connect(msp, mdp)(CommentIndex);

export default CommentIndexContainer;