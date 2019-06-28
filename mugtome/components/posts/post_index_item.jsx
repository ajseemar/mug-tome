import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Redirect } from 'react-router-dom';

import CreateCommentContainer from '../comments/create_comment_container';
import CommentIndexContainer from '../comments/comment_index_container';
import CommentIndex from '../comments/comment_index';

const MONTHS = Object.freeze([
    "January", "February", "March", "April",
    "May", "June", "July", "August", "September",
    "October", "November", "December"
]);

class PostIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false
        }
    }
    componentDidMount() {
        // debugger
        this.props.requestComments({ commentable_type: 'posts', commentable_id: this.props.post.id });
        this.props.requestLikes({ likeable_type: 'posts', likeable_id: this.props.post.id })
        if (!this.props.postOwner) this.props.requestUser(this.props.post.user_id);
    }

    redirect(path) {
        this.props.history.replace(path);
    }

    renderName({ postOwner, timelineOwner }) {
        if (timelineOwner) return (
            <div className='name-container'>
                <Link className="page-link-container" to={`/users/${this.props.postOwner.first_name}/${this.props.postOwner.last_name}/${this.props.postOwner.id}`}>
                    <h2 className='name'>{postOwner.first_name[0].toUpperCase() + postOwner.first_name.slice(1)} {postOwner.last_name[0].toUpperCase() + postOwner.last_name.slice(1)}</h2>
                </Link>
                <i className="fas fa-caret-right"></i>
                <Link className="page-link-container" to={`/users/${this.props.timelineOwner.first_name}/${this.props.timelineOwner.last_name}/${this.props.timelineOwner.id}`}>
                    <h2 className='name'>{timelineOwner.first_name[0].toUpperCase() + timelineOwner.first_name.slice(1)} {timelineOwner.last_name[0].toUpperCase() + timelineOwner.last_name.slice(1)}</h2>
                </Link>
            </div>
        );
        else return (
            <div className="name-container">
                <Link className="page-link-container" to={`/users/${this.props.postOwner.first_name}/${this.props.postOwner.last_name}/${this.props.postOwner.id}`}>
                    <h2 className='name'>{postOwner.first_name[0].toUpperCase() + postOwner.first_name.slice(1)} {postOwner.last_name[0].toUpperCase() + postOwner.last_name.slice(1)}</h2>
                </Link>
            </div>
        );
    }

    renderTime(post) {
        const [date, time] = post.created_at.split('T');
        const [yr, mth, day] = date.split('-');
        const [hrs, mins] = time.split('.')[0].split(':');
        const hour = parseInt(hrs) % 12;
        return `${MONTHS[parseInt(mth)]} ${day} at ${hour === 0 ? 12 : hour}:${mins} ${parseInt(hrs) > 12 ? 'PM' : 'AM'}`;
    }

    PostSettings(props) {
        // debugger;
        if (props.user.id === props.postOwner.id) return (
            <div className="options-container">
                <button onClick={() => props.deletePost(props.post.id)}>Delete</button>
            </div>
        );
    }

    renderPostSettings({ user, postOwner, deletePost }) {
        // debugger;
        let visible = false;

        return () => {
            visible = !visible;
            if (visible) ReactDOM.render(<this.PostSettings post={this.props.post} user={user} postOwner={postOwner} deletePost={deletePost} />, document.getElementById('post-settings-container'));
            else ReactDOM.render(<></>, document.getElementById('post-settings-container'));
        }
    };

    renderLikeCounter() {
        if (this.props.post.likeIds.length > 0)
            return (
                <div id='like-counter-container'>
                    <div id='like-icon-container' style={{ backgroundColor: 'teal', borderRadius: '50%', width: '15px', height: '15px' }}>
                        <i style={this.props.post.likeIds.length > 0 ? { color: 'white' } : {}} className="far fa-thumbs-up"></i>
                    </div>
                    <div id="like_counter">{this.props.post.likeIds.length}</div>
                </div>
            );
    }

    renderCommentCounter() {
        if (this.props.post.commentIds.length > 0)
            return <div id="comment_counter">{this.props.post.commentIds.length}</div>
    }

    renderComments() {
        if (this.props.post.commentIds.length > 0 && Object.values(this.props.comments).length > 0) return (
            // <CommentIndexContainer comments={this.props.comments} commentIds={this.props.post.commentIds} />
            <div className="comments-container">
                {this.props.post.commentIds.map(id => (
                    <div key={id} className="comment-container">
                        <i style={{ color: `#${Math.floor(Math.random() * 16777215).toString(16)}`, fontSize: 36 }} className="fas fa-user-circle" />
                        <div className='comment-main'>
                            <div className="comment-body">
                                <div className="idekanymore">
                                    <Link className="comment-owner" to={`/users/${this.props.postOwner.first_name}/${this.props.postOwner.last_name}/${this.props.postOwner.id}`}>
                                        <h2 className='name'>{`${this.props.users[this.props.comments[id].user_id].first_name} ${this.props.users[this.props.comments[id].user_id].last_name}`}</h2>
                                    </Link>
                                    <div className='comment'>
                                        {this.props.comments[id].body}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );// <CommentIndexContainer commentIds={this.props.post.commentIds}/>
    }

    createLike() {
        if (this.state.liked) {
            this.props.deleteLike();
        }
        else {
            const params = {
                likeable_type: 'posts',
                likeable_id: this.props.post.id,
                like: {
                    likeable_type: 'Post',
                    likeable_id: this.props.post.id
                }
            };
            this.props.createLike(params);
            // window.location.reload()
            this.setState({ liked: true })
        }
    }

    render() {
        if (this.props.postOwner === undefined) return null;
        return (
            <div className="post-item-container">
                {/* <Header user={props.user} post={props.post} timeline_owner={props.timeline_owner}/> */}

                <header>
                    {/* <img className='poster-avatar' src={this.props.postOwner.avatar} alt="Avatar" /> */}
                    <i className='fas fa-user-circle' style={{ fontSize: 32 }}></i>
                    <div className='subheader-container'>
                        <div>
                            {this.renderName(this.props)}
                            <h3>{this.renderTime(this.props.post)}</h3>
                        </div>
                        <div id='post-settings-button-container'>
                            <i id='post-settings-container' className="fas fa-ellipsis-h"></i>
                        </div>
                    </div>
                </header>

                <main>
                    <p>{this.props.post.body}</p>
                </main>

                <footer>
                    <div id="counters">
                        {this.renderLikeCounter()}
                        <div id="comment_counter">{this.props.post.commentIds.length} comments</div>
                    </div>

                    <hr style={{ margin: 0 }} />

                    <div className="post-actions-container">
                        <button onClick={this.createLike.bind(this)} style={this.props.post.likeIds.length > 0 ? { color: 'teal' } : {}} >
                            <i style={this.props.post.likeIds.length > 0 ? { color: 'teal' } : {}} className="far fa-thumbs-up"></i>
                            Like
                        </button>
                        <div>
                            <label htmlFor="comment">
                                <i className="far fa-comment-alt"></i>
                                Comment
                        </label>
                        </div>
                    </div>
                    <div style={{ display: "block" }}>
                        <hr style={{ marginTop: 0 }} />
                    </div>
                    {this.renderComments()}
                    <CreateCommentContainer type="Post" typeId={this.props.post.id} />
                </footer>

            </div>
        )
    }
}

export default PostIndexItem;