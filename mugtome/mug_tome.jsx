import React from 'react';
import ReactDOM from 'react-dom';

import Root from './root';

import { login, signup, logout } from './utils/session_api';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore();

    // ------ Temporary Global Variables for Debugging Purposes --------------

    window.login = login;
    window.signup = signup;
    window.logout = logout;

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    
    // -----------------------------------------------------------------------


    ReactDOM.render(<Root store={store} />, root);
});