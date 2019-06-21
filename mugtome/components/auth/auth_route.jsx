import React from 'react'
import { withRouter, Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (
            <Component {...props} />
        ) : (
                <Redirect to='/home' />
            )
    )} />
);

const msp = state => (
    { loggedIn: Boolean(state.session.id) }
)

const AuthRoute = withRouter(connect(msp, null)(Auth));

export default AuthRoute;