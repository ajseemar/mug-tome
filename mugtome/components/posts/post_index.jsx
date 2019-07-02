import React from 'react';

import PostIndexItemContainer from './post_index_item_container';

class PostIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: {}
        };
    }

    componentDidMount() {
        this.props.requestPosts().then(() => {
            this.setState({
                posts: this.props.posts
            });
        });
    }

    componentWillReceiveProps(nextProps) {
        if (Object.keys(nextProps.posts).length !== Object.keys(this.state.posts).length) {
            this.setState({
                posts: nextProps.posts
            });
        }
    }

    componentDidUpdate(prevProps) {
        // debugger
        if (prevProps.posts.length !== this.props.posts.length) {
            console.log(prevProps.posts, this.props.posts);
            // debugger
        }
    }

    renderPosts() {
        if (this.state.posts && this.state.posts.length > 0)
            return this.state.posts.map((post, idx) => (
                <PostIndexItemContainer key={idx} post={post} />
            ));
    }

    render() {
        return (
            <div className="post-index-container">
                <h3>Posts</h3>
                <ul>{this.renderPosts()}</ul>
            </div>
        )
    }
}

export default PostIndex;