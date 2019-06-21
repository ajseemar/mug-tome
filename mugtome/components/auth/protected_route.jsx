import React from 'react'
import { withRouter, Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux';

const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        loggedIn ? (
            <Component {...props} />
        ) : (
                <Redirect to="/" />
            )
    )} />
);

const msp = state => (
    { loggedIn: Boolean(state.session.id) }
)

const ProtectedRoute = withRouter(connect(msp, null)(Protected));

export default ProtectedRoute;