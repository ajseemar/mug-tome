import { RECEIVE_FRIEND_REQUESTS, RECEIVE_FRIEND_REQUEST, REMOVE_FRIEND_REQUEST } from "../../actions/friend_actions";

const FriendRequestsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_FRIEND_REQUESTS:
            return action.reqs;
        case RECEIVE_FRIEND_REQUEST:
            return Object.assign({}, state, { outgoing: [...state.outgoing, action.req]});
        case REMOVE_FRIEND_REQUEST:
            const newState = Object.assign({}, state);
            delete newState[action.reqId]
            return newState;
        default:
            return state;
    }
}

export default FriendRequestsReducer;