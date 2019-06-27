import * as PostsAPI from '../utils/post_api';

import { receiveErrors } from './session_actions';

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";

const receivePosts = (posts) => ({
    type: RECEIVE_POSTS,
    posts
});

const receivePost = post => ({
    type: RECEIVE_POST,
    post
});

const removePost = post => ({
    type: REMOVE_POST,
    postId: post.id
});

export const requestPosts = () => dispatch => (
    PostsAPI.requestPosts()
    .then((posts) => dispatch(receivePosts(posts)))
);

export const requestPost = (id) => dispatch => (
    PostsAPI.requestPost(id)
    .then((post) => dispatch(receivePost(post)))
);

export const createPost = (post) => dispatch => (
    PostsAPI.createPost(post)
    .then(
        post => dispatch(receivePost(post))),
        err => (dispatch(receiveErrors(err.responseJSON))
    )
);

export const updatePost = (post) => dispatch => (
    PostsAPI.updatePost(post)
    .then(
        post => dispatch(receivePost(post))),
        err => (dispatch(receiveErrors(err.responseJSON))
    )
);

export const deletePost = (id) => dispatch => (
    PostsAPI.deletePost(id)
    .then(
        post => dispatch(removePost(post))),
        err => (dispatch(receiveErrors(err.responseJSON))
    )
);