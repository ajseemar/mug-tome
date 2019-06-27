import React from 'react';

class CreatePostWidget extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
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
                        <textarea className='create-post-input' placeholder={`What's on your mind ${this.props.currentUser.first_name} ${this.props.currentUser.last_name}`}></textarea>
                    </form>
                </div>
                <div className="create-post-modal-break"></div>
                
                <div className="post-modal-share-button-container">
                    <button className="post-modal-share-button">Share</button>
                </div>
            </div>
        )
    }
}

export default CreatePostWidget;