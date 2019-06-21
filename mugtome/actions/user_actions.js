import * as UserAPI from '../utils/user_api';
import thunk from 'redux-thunk';

export const RECEIVE_USERS = "RECEIVE_USERS";

const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
});

export const requestUsers = () => dispatch => (
    UserAPI.requestUsers()
        .then((users) => dispatch(receiveUsers(users)))
);