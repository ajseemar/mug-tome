import * as UserAPI from '../utils/user_api';

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";

const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
});

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

export const requestUsers = () => dispatch => (
    UserAPI.requestUsers()
        .then((users) => dispatch(receiveUsers(users)))
);

export const requestUser = (id) => dispatch => (
    UserAPI.requestUser(id)
        .then((user) => dispatch(receiveUser(user)))
);