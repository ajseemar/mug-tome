import React from 'react';
import { Link } from 'react-router-dom';

import CreateCommentContainer from '../comments/create_comment_container';
// import CommentIndexContainer from '../comments/comment_index_container';
// import CommentIndex from '../comments/comment_index';

const MONTHS = Object.freeze([
    "January", "February", "March", "April",
    "May", "June", "July", "August", "September",
    "October", "November", "December"
]);

class PostIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false,
            toggled: false,
            post: this.props.post
        }
    }

    componentDidMount() {
        if (!this.props.postOwner) this.props.requestUser(this.props.post.user_id);
    }

    componentDidUpdate(prevProps) {
        // debugger
        if (this.props.post !== prevProps.post) {
            // this.props.requestPost(prevProps.post.id);
        }
        // console.log('hi');
    }

    // componentWillReceiveProps() {
    //     this.renderLikeCounter()
    // }

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

    renderPostSettings() {
        if (this.state.toggled) return (
            <ul>
                <li>Delete Post</li>
            </ul>
        )

    };

    renderLikeCounter() {
        // if (!this.props.post.likes) return;
        const { likes } = this.state.post;
        console.log(likes)
        if (!likes) return;
        if ((Object.keys(likes)).length > 0)
            debugger
        return (
            <div id='like-counter-container'>
                <div id="like_counter">
                    {
                        likes ?
                            Object.keys(likes).length : 0
                    } {
                        likes && Object.keys(likes).length === 1 ?
                            "like" : "likes"
                    }
                </div>
            </div>
        );
    }

    renderCommentCounter() {
        if (!this.props.post.comments) return;

        const { comments } = this.props.post;
        if (Object.keys(comments).length > 0) {
            return (
                <div id="comment_counter">{this.props.post.commentIds.length}</div>
            );
        }
    }

    renderCommentLikeCounter(comment) {
        if (comment.likeIds.length > 0) return (
            <div className="comment-like-counter">
                <div className="comment-like-counter-icontainer">
                    <i className="far fa-thumbs-up"></i>
                </div>
                <p>{comment.likeIds.length}</p>
            </div>
        );
    }

    renderComment(id) {
        const comment = this.props.comments[id];
        if (comment)
            return (
                <div key={id} className="comment-container">
                    <div className="comment-main-content">
                        <i style={{ color: `#${Math.floor(Math.random() * 16777215).toString(16)}`, fontSize: 36 }} className="fas fa-user-circle" />
                        <div className='comment-main'>
                            <div className="comment-body">
                                <div className="idekanymore">
                                    <Link className="comment-owner" to={`/users/${this.props.postOwner.first_name}/${this.props.postOwner.last_name}/${this.props.postOwner.id}`}>
                                        <h2 className='name'>{`${this.props.users[comment.user_id].first_name} ${this.props.users[comment.user_id].last_name}`}</h2>
                                    </Link>
                                    <div className='comment'>
                                        {comment.body}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {this.renderCommentLikeCounter(comment)}
                    </div>
                    <button onClick={() => {
                        this.props.createLike({
                            likeable_type: 'comments',
                            likeable_id: comment.id,
                            like: {
                                likeable_type: 'Comment',
                                likeable_id: comment.id
                            }
                        }); window.location.reload();
                    }} className='comment-like-button' style={comment.likeIds.length > 0 ?
                        { top: '-15px' } : { top: '0px' }
                    }>Like</button>
                </div>
            )
    }

    renderComments() {
        if (this.props.post.commentIds.length > 0 && Object.values(this.props.comments).length > 0) return (
            // <CommentIndexContainer comments={this.props.comments} commentIds={this.props.post.commentIds} />
            <div className="comments-container">
                {this.props.post.commentIds.map(id => this.renderComment(id))}
            </div>
        );// <CommentIndexContainer commentIds={this.props.post.commentIds}/>
    }

    createLike() {
        const params = {
            likeable_type: 'posts',
            likeable_id: this.props.post.id,
            like: {
                likeable_type: 'Post',
                likeable_id: this.props.post.id
            }
        };
        this.props.createLike(params).then(() => {
            this.props.requestPost(this.props.post.id).then((post) => {
                this.setState({
                    liked: !this.state.liked,
                    post: post
                });
            });
        });
    }

    componentWillReceiveProps(nextProps) {
        // if (this.props.liked !== nextProps.liked) {
        //     this.setState({
        //         liked: nextProps.liked
        //     });
        // }
        if (this.props.post && nextProps.post) {
            if (this.props.post.likes && nextProps.post.likes && Object.keys(this.props.post.likes).length !== Object.keys(nextProps.post.likes).length) {
                this.setState({
                    post: nextProps.post
                });
            }
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
                        <div className='post-settings-button-container'>
                            <i onClick={() => this.setState({ toggled: !this.state.toggled })} id='post-settings-container' className="fas fa-ellipsis-h"></i>
                            <div className="post-settings">{this.renderPostSettings()}</div>
                        </div>
                    </div>
                </header>

                <main>
                    <p>{this.props.post.body}</p>
                </main>

                <footer>
                    <div id="counters">
                        {this.renderLikeCounter()}
                        <div id="comment_counter">{this.props.post.comments ? Object.keys(this.props.post.comments).length : 0} comments</div>
                    </div>

                    <hr style={{ margin: 0, width: '100%' }} />

                    <div className="post-actions-container">
                        <button onClick={this.createLike.bind(this)} style={this.state.liked ? { color: 'teal' } : {}} >
                            <i style={this.state.liked ? { color: 'teal' } : {}} className="far fa-thumbs-up"></i>
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
                        <hr style={{ marginTop: 0, width: '100%' }} />
                    </div>
                    {/* {this.renderComments()}
                    <CreateCommentContainer type="Post" typeId={this.props.post.id} /> */}
                </footer>

            </div>
        )
    }
}

export default PostIndexItem;