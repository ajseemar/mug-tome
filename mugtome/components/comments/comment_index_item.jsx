import React from 'react';

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.comment) return null;
        return (
            <div className="comment">
                <i style={{ color: `#${Math.floor(Math.random() * 16777215).toString(16)}`, fontSize: 36 }} className="fas fa-user-circle" />
                <p>{this.props.comment}</p>
            </div>
        )
    }
}

export default CommentIndexItem;