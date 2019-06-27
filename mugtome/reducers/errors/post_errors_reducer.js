import { RECEIVE_ERRORS } from "../../actions/session_actions";
import { RECEIVE_POST } from "../../actions/post_actions";

const PostErrorsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_POST:
            return {};
        case RECEIVE_ERRORS:
            return Object.assign({}, state, action.errors)
        default:
            return state;
    }
}

export default PostErrorsReducer;