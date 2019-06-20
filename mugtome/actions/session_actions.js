import * as SessionAPI from '../utils/session_api';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
});

export const signup = (user) => dispatch => SessionAPI.signup(user)
    .then(user => (dispatch(receiveCurrentUser(user))),
        err => (dispatch(receiveErrors(err.responseJSON))));

export const login = (user) => dispatch => SessionAPI.login(user)
    .then(user => (dispatch(receiveCurrentUser(user))),
    err => (dispatch(receiveErrors(err.responseJSON))));    

export const logout = () => dispatch => SessionAPI.logout()
    .then(() => (dispatch(logoutCurrentUser())),
        err => (dispatch(receiveErrors(err.responseJSON))));

