import * as LikeAPI from '../utils/like_api';

export const RECEIVE_LIKES = "RECEIVE_LIKES";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

const receiveLikes = likes => ({
    type: RECEIVE_LIKES,
    likes
});

const receiveLike = like => ({
    type: RECEIVE_LIKE,
    like
});

const removeLike = like => ({
    type: REMOVE_LIKE,
    likeId: like.id
});

export const requestLikes = (params) => dispatch => (
    LikeAPI.requestLikes(params)
        .then((likes) => dispatch(receiveLikes(likes)))
);

export const createLike = (params) => dispatch => (
    LikeAPI.createLike(params)
        .then((like) => dispatch(receiveLike(like)))
);

export const deleteLike = (id) => dispatch => (
    LikeAPI.deleteLike(id)
        .then((like) => dispatch(removeLike(like)))
);