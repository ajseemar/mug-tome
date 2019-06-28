import React from 'react';
import { Link } from 'react-router-dom';

import NavbarContainer from '../navbar/navbar_container';
import Footer from '../widgets/footer';
import CreatePostWidgetContainer from '../posts/create_post_container';
import Modal from '../widgets/modal';
import PostIndexItemContainer from '../posts/post_index_item_container';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestPosts();
    }

    renderFeed() {
        const { newsFeedPostIds } = this.props.currentUser;
        const { posts } = this.props;
        let newsFeed = [];
        if (newsFeedPostIds.length > 0 && Object.values(posts).length > 0)
            newsFeedPostIds.forEach(id => {
                if (posts[id]) newsFeed.push(posts[id]);
            });
        return newsFeed.map((post, idx) => (
            <PostIndexItemContainer key={`${idx}-${post.id}`} post={post} />
        ));
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
                                <div className='name-container-holderdiv'>{`${this.props.currentUser.first_name} ${this.props.currentUser.last_name}`}</div>
                            </Link>
                        </div>
                        <div className="feature">
                            <img src={window.newsFeedImgUrl} />
                            <h2>News Feed</h2>
                        </div>

                        <div className="feature">
                            <img src={window.messengerImgUrl} />
                            <Link className="messenger-nav-link" to={`/users/${this.props.currentUser.first_name}/${this.props.currentUser.last_name}/${this.props.currentUser.id}/messenger`}>
                                <h2>Messenger</h2>
                            </Link>
                        </div>
                    </div>

                    <div className="news-feed-container">
                        <CreatePostWidgetContainer />
                        <div className="news-feed-main">
                            {this.renderFeed()}
                        </div>
                    </div>

                    <footer>
                        <div className="widgets-container">
                            <Footer />
                        </div>
                    </footer>

                </div>
            </div >
        )
    }
}

export default Home;