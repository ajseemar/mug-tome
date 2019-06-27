import React from 'react';

import PostIndexItemContainer from './post_index_item_container';

class PostIndex extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount() {
        // debugger
        this.props.requestPosts();
    }

    // componentDidUpdate(prevProps) {
    //     console.log(this.props.posts, prevProps.posts);
    //     if (this.props.posts && prevProps.posts && prevProps.posts.length !== this.props.posts.length) {
    //         this.props.requestPosts();
    //     }
    // }

    renderPosts () {
        if (this.props.posts && this.props.posts.length > 0)
            return this.props.posts.map((post, idx) => (
                <PostIndexItemContainer key={idx} post={post} />
            ));
    }

    render () {
        return (
            <div className="post-index-container">
                <h3>Posts</h3>
                <ul>{this.renderPosts()}</ul>
            </div>
        )
    }
}

export default PostIndex;