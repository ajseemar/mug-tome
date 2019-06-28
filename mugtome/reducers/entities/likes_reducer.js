import { RECEIVE_LIKES, RECEIVE_LIKE, REMOVE_LIKE } from "../../actions/like_actions";

const LikesReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_LIKES:
            return Object.assign({}, state, action.likes);
        case RECEIVE_LIKE:
            return Object.assign({}, state, action.like);
        case REMOVE_LIKE:
            const newState = Object.assign({}, state);
            delete newState[action.likeId];
            return newState;
        default:
            return state;
    }
}

export default LikesReducer;