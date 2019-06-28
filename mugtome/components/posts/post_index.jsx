import React from 'react';

import PostIndexItemContainer from './post_index_item_container';

class PostIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // debugger
        this.props.requestPosts();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.modal && this.props.modal === null) window.location.reload();
    }

    renderPosts() {
        if (this.props.posts && this.props.posts.length > 0)
            return this.props.posts.map((post, idx) => (
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