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
                <div className="profile-page-content">
                    <header className="profile-header">
                        <div className="background-image-container"></div>
                        <div className="avatar-container">
                            <div className="avatar">
                                <i style={{color: "blue", fontSize: 165}} className="fas fa-user-circle" />
                            </div>
                            <div className="avatar-name">{`${this.props.match.params.user_fn} ${this.props.match.params.user_ln}`}</div>
                        </div>
                        <nav className="profile-nav">
                            <ul className="nav-links-container">
                                <li className="nav-link">Timeline</li>
                                <li className="nav-link">About</li>
                                <li className="nav-link">Friends</li>
                                <li className="last-nav-link">Photos</li>
                            </ul>
                        </nav>
                    </header>
                    <main className='profile-main-content'>
                        <div className="widgets-container">
                            <div className="language-widget-container">
                                <ul className="language-widget">
                                    <li className="language-widget-item">English (US)</li>
                                    <li className="language-widget-item">.</li>
                                    <li className="language-widget-item">Español</li>
                                    <li className="language-widget-item">.</li>
                                    <li className="language-widget-item">Português (Brasil)</li>
                                    <li className="language-widget-item">.</li>
                                    <li className="language-widget-item">Français (France)</li>
                                    <li className="language-widget-item">.</li>
                                    <li className="language-widget-item">Deutsch</li>
                                </ul>
                            </div>
                            <div className="widget-footer-container">
                                <ul className="widget-footer">
                                    <li className="widget-footer-item">Privacy</li>
                                    <li className="widget-footer-item">.</li>
                                    <li className="widget-footer-item">Terms</li>
                                    <li className="widget-footer-item">.</li>
                                    <li className="widget-footer-item">Advertising</li>
                                    <li className="widget-footer-item">.</li>
                                    <li className="widget-footer-item">Ad Choices</li>
                                    <li className="widget-footer-item">.</li>
                                    <li className="widget-footer-item">Cookies</li>
                                    <li className="widget-footer-item">.</li>
                                    <li className="widget-footer-item">More</li>
                                </ul>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}

export default Profile;