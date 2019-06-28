import * as CommentAPI from '../utils/comment_api';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
});

const receiveCommment = comment => ({
    type: RECEIVE_COMMENT,
    comment
});

const removeComment = comment => ({
    type: REMOVE_COMMENT,
    commentId: comment.id
});

export const requestComments = (params) => dispatch => (
    CommentAPI.requestComments(params)
        .then((comments) => dispatch(receiveComments(comments)))
);

export const createComment = (params) => dispatch => (
    CommentAPI.createComment(params)
        .then((comment) => dispatch(receiveCommment(comment)))
);

export const deleteComment = (id) => dispatch => (
    CommentAPI.deleteComment(id)
        .then((comment) => dispatch(removeComment(comment)))
);