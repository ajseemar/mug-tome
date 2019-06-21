import React from 'react';
import { Link } from 'react-router-dom';

import NavbarContainer from '../navbar/navbar_container';

class Profile extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className="profile-page-container">
                <NavbarContainer placeholderText={`${this.props.match.params.user_fn} ${this.props.match.params.user_ln}`} />
                <p>Profile Page</p>
            </div>
        );
    }
}

export default Profile;