import React from 'react';
import { Link } from 'react-router-dom';

const ProfileNavbar = props => (
    <header className="profile-header">
        <div className="background-image-container"></div>
        <div className="avatar-container">
            <div className="avatar">
                <i style={{ color: "blue", fontSize: 165 }} className="fas fa-user-circle" />
            </div>
            <div className="avatar-name">{`${props.match.params.user_fn} ${props.match.params.user_ln}`}</div>
        </div>
        <nav className="profile-nav">
            <ul className="nav-links-container">
                <Link to={`/users/${props.currentUser.first_name}/${props.currentUser.last_name}/${props.currentUser.id}`}>
                    <li className="nav-link">Timeline</li>
                </Link>
                <Link to={`/users/${props.currentUser.first_name}/${props.currentUser.last_name}/${props.currentUser.id}/about`}>
                    <li className="nav-link">About</li>
                </Link>
                <Link to={`/users/${props.currentUser.first_name}/${props.currentUser.last_name}/${props.currentUser.id}/friends`}>
                    <li className="nav-link">Friends</li>
                </Link>
                <Link to={`/users/${props.currentUser.first_name}/${props.currentUser.last_name}/${props.currentUser.id}/photos`}>
                    <li className="last-nav-link">Photos</li>
                </Link>
            </ul>
        </nav>
    </header>
);

export default ProfileNavbar;