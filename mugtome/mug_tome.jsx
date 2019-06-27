import React from 'react';
import ReactDOM from 'react-dom';

import Root from './root';

import { login, signup, logout } from './actions/session_actions';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    let preloadedState = {};
    if (window.window.currentUser) {
        preloadedState = {
            entities: {
                users: {
                    [window.currentUser.id]: window.currentUser
                },
                friendRequests: {
                    incoming: [],
                    outgoing: []
                }
            },
            errors: {
                session: []
            },
            session: {
                id: window.currentUser.id
            },
            ui: {
                modal: null
            }
        };
        delete window.currentUser;
    }
    const store = configureStore(preloadedState);

    // ------ Temporary Global Variables for Debugging Purposes --------------

    window.login = login;
    window.signup = signup;
    window.logout = logout;

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    
    // -----------------------------------------------------------------------


    ReactDOM.render(<Root store={store} />, document.getElementById('root'));
});