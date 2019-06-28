import React from 'react';

class CreateCommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: "",
            commentable_type: this.props.type,
            commentable_id: this.props.typeId
        };
    }

    handleInput(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const params = {
            commentable_type: `${this.props.type.toLowerCase()}s`,
            commentable_id: this.props.typeId,
            comment: this.state
        }
        // console.log('submitted comment', params);
        this.props.createComment(params);
        this.setState({
            body: ""
        });
        // window.location.reload();
    }

    render() {
        return (
            <form className='create-comment-form' onSubmit={this.handleSubmit.bind(this)}>
                {/* <img src={this.props.user.avatar} alt="User Avatar" /> */}
                {/* <i style={{ color: `#${Math.floor(Math.random() * 16777215).toString(16)}`, fontSize: 36 }} className="fas fa-user-circle" /> */}
                <i className='fas fa-user-circle' style={{ fontSize: 36 }}></i>
                <div>
                    <input id='comment' type="text" placeholder="Write a comment..." value={this.state.body} onChange={this.handleInput("body")} />
                    <p>Press Enter to post.</p>
                </div>
                <input type="submit" style={{ display: "none" }} />

            </form>
        );
    }
}

export default CreateCommentForm;