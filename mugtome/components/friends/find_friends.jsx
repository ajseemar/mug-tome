import React from 'react';
import { Link } from 'react-router-dom';

import NavbarContainer from '../navbar/navbar_container';

class FindFriends extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: {},
            incoming: true
        }
        this.height = 400;
    }

    populateState() {
        const { users, currentUser } = this.props;
        const incoming = this.props.friendRequests.incoming.map(req => req.user_id);
        const outgoing = this.props.friendRequests.outgoing.map(req => req.friend_id);
        let candidates = Object.values(users).filter(user => (
            !currentUser.friendIds.includes(user.id) && user.id !== currentUser.id &&
            !incoming.includes(user.id) && !outgoing.includes(user.id)
        ));
        candidates.forEach(user => this.state.users[user.id] = user);
    }

    componentDidMount() {
        this.props.fetchFriendRequests().then(() => this.populateState());
        this.populateState();
    }

    updateState() {
        this.props.fetchFriendRequests().then(() => this.populateState());
        this.populateState();
    }

    checkForRequests(field) {
        if (field === "incoming") {
            if (this.props.friendRequests.incoming && this.props.friendRequests.incoming.length === 0) {
                return <p id='request-title-header'>No New Friend Requests</p>
            } else this.renderFriendRequests()
        } else {
            if (this.props.friendRequests.outgoing && this.props.friendRequests.outgoing.length === 0) {
                return <p id='request-title-header'>No Pending Friend Requests</p>
            } else this.renderFriendRequests()
        }
    }

    addFriend(id) {
        this.props.createFriendRequest({ friend_request: { user_id: this.props.currentUser.id, friend_id: id } });
    }

    acceptFriend(req) {
        this.props.acceptFriendRequest(req)
    }

    rejectFriend(id) {
        this.props.deleteFriendRequest(id);
        this.updateState(id);
    }

    renderIncomingRequestLink(req) {
        if (!this.props.users[req.user_id]) return null;
        return (
            <Link className="outgoing-request-user-info" to={`/users/${this.props.users[req.user_id].first_name}/${this.props.users[req.user_id].last_name}/${this.props.users[req.user_id].id}`}>
                <i style={{ color: `#${Math.floor(Math.random() * 16777215).toString(16)}`, fontSize: 36 }} className="fas fa-user-circle" />
                <p>{`${this.props.users[req.user_id].first_name} ${this.props.users[req.user_id].last_name}`}</p>
            </Link>
        )
    }

    renderIncomingRequests() {
        if (Object.values(this.props.friendRequests.incoming).length > 0 && Object.values(this.props.users).length > 0)
            return (
                <div className="outgoing-requests">
                    {
                        Object.values(this.props.friendRequests.incoming).map(req => (
                            <div key={`${req.id}-${req.user_id}-${req.friend_id}`} className="outgoing-request">
                                {this.renderIncomingRequestLink(req)}
                                <div className="incoming-request-actions">
                                    <button id='accept-friend-action-button' onClick={() => this.acceptFriend(req)}><i className="fas fa-user-plus"></i>Accept</button>
                                    <button id='reject-friend-action-button' onClick={() => this.rejectFriend(req.id)}>Reject</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            )
    }

    renderOutgoingRequestLink(req) {
        if (!this.props.users[req.friend_id]) return null;
        return (
            <Link className="outgoing-request-user-info" to={`/users/${this.props.users[req.friend_id].first_name}/${this.props.users[req.friend_id].last_name}/${this.props.users[req.friend_id].id}`}>
                <i style={{ color: `#${Math.floor(Math.random() * 16777215).toString(16)}`, fontSize: 36 }} className="fas fa-user-circle" />
                <p>{`${this.props.users[req.friend_id].first_name} ${this.props.users[req.friend_id].last_name}`}</p>
            </Link>
        )
    }

    renderOutgoingRequests() {
        if (Object.values(this.props.friendRequests.outgoing).length > 0 && Object.values(this.props.users).length > 0)
            return (
                <div className="outgoing-requests">
                    {Object.values(this.props.friendRequests.outgoing).map(req => (
                        <div key={`${req.id}-${req.user_id}-${req.friend_id}`} className="outgoing-request">
                            {this.renderOutgoingRequestLink(req)}
                            <button id='delete-friend-request' onClick={this.rejectFriend.bind(this, req.id)}>Unsend</button>
                        </div>
                    ))}
                </div>
            )
    }

    renderFriendRequests() {
        if (this.state.incoming) return (
            <div className="incoming-requests-container">
                {this.renderIncomingRequests()}
            </div>
        );
        else return (
            <div className="outgoing-requests-container">
                {this.renderOutgoingRequests()}
            </div>
        );
    }

    renderCandidates() {
        return (
            <div id="potential-friends-container">
                <p id='request-title-header'>People You May Know</p>
                <hr />
                <div id="potential-friends">
                    {Object.values(this.state.users).splice(0, 30).map((user, idx) => (
                        <div key={`${user.first_name}-${user.last_name}-${idx}`} className="potential-friend-request-container">
                            <div className="user-info-container">
                                <i style={{ color: `#${Math.floor(Math.random() * 16777215).toString(16)}`, fontSize: 40 }} className="fas fa-user-circle" />
                                <Link className="page-link-container" to={`/users/${user.first_name}/${user.last_name}/${user.id}`}>
                                    <p>{`${user.first_name} ${user.last_name}`}</p>
                                </Link>
                            </div>
                            <div className="user-request-actions">
                                <button id='add-friend-action-button' onClick={() => this.addFriend(user.id)}>Add Friend</button>
                                <button id='remove-friend-action-button' onClick={() => this.updateState(user.id)}>Remove</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    render() {
        return (
            <div id="find-friends-page-container">
                <NavbarContainer />
                <div id="find-friends-page">
                    <div className="friend-requests-container">
                        {this.state.incoming ? this.checkForRequests('incoming') : this.checkForRequests()}
                        {this.renderFriendRequests()}
                        <button id='friend-request-toggle' onClick={() => this.setState({
                            incoming: !this.state.incoming
                        })}>{this.state.incoming ? "View Sent Requests" : "View Received Requests"}</button>
                    </div>
                    {this.renderCandidates()}
                </div>
            </div>
        )
    }
}

export default FindFriends;