import React from 'react';
import { Link } from 'react-router-dom';

import NavbarContainer from '../navbar/navbar_container';
import Footer from '../widgets/footer';
import PostIndexContainer from '../posts/post_index_container';

import Modal from '../widgets/modal';


class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.props.requestUsers();
        if (this.props.user === undefined) this.props.requestUser(this.props.match.params.id);
    }

    renderProfileNavbar() {
        return (
            <header className="profile-header">
                <div className="background-image-container"></div>
                <div className="avatar-container">
                    <div className="avatar">
                        <i style={{ color: "blue", fontSize: 165 }} className="fas fa-user-circle" />
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
        );
    }

    renderPostInputContainer() {
        return (
            <div className="create-post-normal-container" onClick={() => this.props.openModal({ component: 'create_post', id: this.props.match.params.id })}>
                <Modal />
                <div className="create-post-widget">
                    <div className="modal-header-container">
                        <i className="fas fa-pencil-alt"></i>
                        <h3 className="modal-header">Create Post</h3>
                    </div>
                    <div className="modal-form-container">
                        <div className="modal-avatar-container">
                            <i style={{ color: "blue", fontSize: 36 }} className="fas fa-user-circle" />
                        </div>
                        <form>
                            <textarea disabled className='create-post-input' placeholder={`What's on your mind...`}></textarea>
                        </form>
                    </div>
                    <div className="create-post-modal-break"></div>

                    <div className="post-actions-container">
                        <div className="post-action">
                            <img src={window.addPhotoImgUrl} />
                            <p>Add Photo/Video</p>
                        </div>
                        <div className="post-action">
                            <img src={window.addTagImgUrl} />
                            <p>Tag Friends</p>
                        </div>
                        <div className="post-action">
                            <img src={window.addReactionImgUrl} />
                            <p>Feelings/Activities</p>
                        </div>
                        <div className="post-action">...</div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        if (this.props.currentUser === undefined) return null;
        return (
            <div className="profile-page-container">
                <NavbarContainer placeholderText={`${this.props.match.params.user_fn} ${this.props.match.params.user_ln}`} />
                <div className="profile-page-content">
                    {this.renderProfileNavbar()}
                    <main className='profile-main-content'>
                        <div className="widgets-container">
                            <Footer />
                        </div>
                        <div className="timeline-main-content">
                            {this.renderPostInputContainer()}
                            <div className="modal-background" style={{ display: 'none' }}></div>
                            <PostIndexContainer user_id={this.props.match.params.id} />
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}

export default Profile;