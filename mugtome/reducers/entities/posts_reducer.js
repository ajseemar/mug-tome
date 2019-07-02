import merge from 'lodash/merge';

import { RECEIVE_POSTS, RECEIVE_POST, REMOVE_POST } from "../../actions/post_actions";

const PostsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_POSTS:
            return action.posts;
        case RECEIVE_POST:

            if (action.post.likes) {
                return merge({}, state, { [action.post.id]: action.post })
            } else {
                let qnewState = merge({}, state)
                delete qnewState[action.post.id]
                return merge({}, qnewState, { [action.post.id]: action.post })
            }
        case REMOVE_POST:
            const newState = merge({}, state);
            delete newState[action.postId];
            return newState;
        default:
            return state;
    }
};

export default PostsReducer;