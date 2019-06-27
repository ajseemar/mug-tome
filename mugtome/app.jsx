import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import AuthRoute from './components/auth/auth_route';
import ProtectedRoute from './components/auth/protected_route';

import GreetingContainer from './components/session/greeting_container';
import ProfileContainer from './components/user/profile_container';
import FindFriendsContainer from './components/friends/find_friends_container';
import Home from './components/home/home';
import Modal from './components/widgets/modal';

const App = () => (
    <div id='app-container'>
        {/* <Route path="/" component={ GreetingContainer } /> */}
        {/* <ProtectedRoute path="/users" component={NavbarContainer} /> */}
        <Modal />
        <Switch>
            <AuthRoute exact path="/" component={GreetingContainer} />
            <ProtectedRoute path="/users/:user_fn/:user_ln/:id" component={ProfileContainer} />
            <ProtectedRoute path="/home/find_friends" component={FindFriendsContainer} />
            <ProtectedRoute exact path="/home" component={Home} />
            <Redirect to='/' />
        </Switch>
    </div>
);

export default App;
