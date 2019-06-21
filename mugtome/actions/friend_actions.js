import  * as FriendAPI from '../utils/friend_api';

export const RECEIVE_FRIEND_REQUESTS = "RECEIVE_FRIEND_REQUESTS";
export const RECEIVE_FRIEND_REQUEST = "RECEIVE_FRIEND_REQUEST";
export const REMOVE_FRIEND_REQUEST = "REMOVE_FRIEND_REQUEST";

const receiveFriendRequests = reqs => ({
    type: RECEIVE_FRIEND_REQUESTS,
    reqs
});

const receiveFriendRequest = req => ({
    type: RECEIVE_FRIEND_REQUEST,
    req
});

const removeFriendRequest = reqId => ({
    type: REMOVE_FRIEND_REQUEST,
    reqId
});

export const fetchFriendRequests = () => dispatch => (
    FriendAPI.fetchFriendRequests()
        .then((reqs) => dispatch(receiveFriendRequests(reqs)))
);

export const createFriendRequest = (req) => dispatch => (
    FriendAPI.createFriendRequest(req)
        .then((req) => dispatch(receiveFriendRequest(req)))
);

export const acceptFriendRequest = (req) => dispatch => (
    FriendAPI.acceptFriendRequest(req)
        .then((req) => dispatch(receiveFriendRequest(req)))
);

export const deleteFriendRequest = (reqId) => dispatch => (
    FriendAPI.deleteFriendRequest(reqId)
        .then((reqId) => dispatch(removeFriendRequest(reqId)))
);