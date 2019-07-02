import React from 'react';

class CreatePostWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.post;
        setTimeout(function () {
            document.getElementsByClassName("create-post-input")[0].focus();
        }, 0);
    }

    handleInput(field) {
        return e => {
            e.preventDefault();
            this.setState({
                [field]: e.currentTarget.value
            });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createPost(this.state).then(() => {
            this.setState({ post: this.props.post })
            this.props.closeModal();
            this.props.requestUser(this.props.currentUser.id);
        });

        // });
    }

    render() {
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
                    <form id='create-post-form' onSubmit={this.handleSubmit.bind(this)}>
                        <textarea className='create-post-input' value={this.state.body} onChange={this.handleInput("body")} placeholder={`What's on your mind...`}></textarea>
                    </form>
                </div>
                <div className="create-post-modal-break"></div>

                <div className="post-modal-share-button-container">
                    <button className="post-modal-share-button" type='submit' form='create-post-form'>Share</button>
                </div>
            </div>
        )
    }
}

export default CreatePostWidget;