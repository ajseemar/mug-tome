import React from 'react';
import { Link } from 'react-router-dom';

import SearchBarContainer from './search_bar_container';

class Navbar extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className="navbar-container">
                <div className="navbar">
                    <Link to="/home" className="logo">m</Link>
                    <SearchBarContainer placeholderText={this.props.placeholderText}/>
                    <Link className='profile-page-link-container' to={`/users/${this.props.currentUser.first_name}/${this.props.currentUser.last_name}/${this.props.currentUser.id}`}>
                        <i className="fas fa-user-circle"></i>
                        <p className='profile-page-link'>{`${this.props.currentUser.first_name} ${this.props.currentUser.last_name}`}</p>
                    </Link>
                    <Link to="/home" className="page-link-container">
                        <p className='page-link'>Home</p>
                    </Link>
                    <Link to="/home/find_friends" className="page-link-container">
                        <p className='page-link'>Find Friends</p>
                    </Link>
                    <div className='logout-button-container'>
                        <button id='logout-button' onClick={this.props.logout}>Log Out</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;