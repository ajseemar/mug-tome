import * as PostsAPI from '../utils/posts_api';

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
        .then((post) => dispatch(receivePost(post)))
);

export const updatePost = (post) => dispatch => (
    PostsAPI.updatePost(post)
        .then((post) => dispatch(receivePost(post)))
);

export const deletePost = (id) => dispatch => (
    PostsAPI.deletePost(id)
        .then((post) => dispatch(removePost(post)))
);