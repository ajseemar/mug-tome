import React from 'react';
import { Link } from 'react-router-dom';

import NavbarContainer from '../navbar/navbar_container';
import Footer from '../widgets/footer';
import CreatePostWidgetContainer from '../posts/create_post_container';
import Modal from '../widgets/modal';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestPosts();
    }

    render() {
        return (
            <div id="home-page-container">
                <NavbarContainer />
                <Modal />
                <div className="home-page-main-content">
                    <div className="features-navigation-container">
                        <div id="profile-nav-link-container">
                            <i style={{ color: `#${Math.floor(Math.random() * 16777215).toString(16)}`, fontSize: 20 }} className="fas fa-user-circle" />
                            <Link className="comment-owner" to={`/users/${this.props.currentUser.first_name}/${this.props.currentUser.last_name}/${this.props.currentUser.id}`}>
                                <h2 className='profile-nav-title'>{`${this.props.currentUser.first_name} ${this.props.currentUser.last_name}`}</h2>
                            </Link>
                        </div>
                        <div className="feature">
                            <img src={window.newsFeedImgUrl} />
                            <h2>News Feed</h2>
                        </div>

                        <div className="feature">
                            <img src={window.messengerImgUrl} />
                            <h2>Messenger</h2>
                        </div>
                    </div>
                    <div className="news-feed-container">
                        <CreatePostWidgetContainer />
                    </div>
                    <footer>
                        <div className="widgets-container">
                            <Footer />
                        </div>
                    </footer>
                </div>
            </div>
        )
    }
}

export default Home;