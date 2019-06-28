import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { comments: {} };
        this.populateState();
        debugger
    }

    populateState() {
        this.props.commentIds.forEach(id => this.state.comments[id] = this.props.comments[id]);
    }

    // componentDidMount() {
    //     this.props.requestComments({ commentable_type: this.props.type, commentable_id: this.props.id });
    // }

    renderComments() {
        return (
            <div className="comments-container">
                {/* {Object.values(this.state.comments).map((comment, idx) => (
                    // <CommentIndexItem key={idx} comment={comment} />
                    // <i style={{ color: `#${Math.floor(Math.random() * 16777215).toString(16)}`, fontSize: 36 }} className="fas fa-user-circle" />
                    // <p>{this.props.comment}</p>
                ))} */}
            </div>
        )
    }

    render() {
        return this.renderComments()
    }
}

export default CommentIndex;