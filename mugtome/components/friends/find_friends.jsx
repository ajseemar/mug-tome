import React from 'react';

import NavbarContainer from '../navbar/navbar_container';

class FindFriends extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            users: {},
            incoming: true
        }
        this.height = 400;
    }
    
    populateState () {
        // let incoming, outgoing;

        const { users, currentUser } = this.props;
        const incoming = this.props.friendRequests.incoming.map(req => req.user_id);
        const outgoing = this.props.friendRequests.outgoing.map(req => req.friend_id)
        // debugger
        let candidates = Object.values(users).filter(user => (
            !currentUser.friendIds.includes(user.id) && user.id !== currentUser.id &&
            !incoming.includes(user.id) && !outgoing.includes(user.id)
        ));
        // if (inc)
        candidates.forEach(user => this.state.users[user.id] = user);
    }
    
    componentDidMount () {
        this.props.fetchFriendRequests().then(() => this.populateState());
        this.populateState();
    }
    
    updateState () {
        this.props.fetchFriendRequests().then(() => this.populateState());
        this.populateState();
    }

    checkForRequests (field) {
        if (field === "incoming") {
            if (Object.keys(this.props.friendRequests.incoming).length === 0) {
                return <p>No New Friend Requests</p>
            } else this.renderFriendRequests()
        } else {
            if (Object.keys(this.props.friendRequests.outgoing).length === 0) {
                return <p>No Pending Friend Requests</p>
            } else this.renderFriendRequests()
        }
    }

    // updateState (id) {
    //     const newState = Object.assign({}, this.state.users);
    //     delete newState[id];
    //     this.setState({ users: newState });
    // }

    addFriend (id) {
        this.props.createFriendRequest({ friend_request: { user_id: this.props.currentUser.id, friend_id: id } });
        // this.updateState(id);
        // window.location.reload();
    }

    acceptFriend (req) {
        this.props.acceptFriendRequest(req)
        // this.updateState(id);
        // window.location.reload();
    }

    rejectFriend (id) {
        this.props.deleteFriendRequest(id);
        this.updateState(id);
        // window.location.reload();
    }

    renderIncomingRequests () {
        if (Object.values(this.props.friendRequests.incoming).length > 0 && Object.values(this.props.users).length > 0)
        return (
            <div className="incoming-requests">
            {
                Object.values(this.props.friendRequests.incoming).map(req => (
                    <div key={`${req.id}-${req.user_id}-${req.friend_id}`} className="incoming-request">
                        <p>{`${this.props.users[req.user_id].first_name} ${this.props.users[req.user_id].last_name}`}</p>
                        <button onClick={() => this.acceptFriend(req)}>Accept</button>
                        <button onClick={() => this.rejectFriend(req.id)}>Reject</button>
                    </div>
                ))
            }
            </div>
        )
    }

    renderOutgoingRequests () {
        if (Object.values(this.props.friendRequests.outgoing).length > 0 && Object.values(this.props.users).length > 0)
        return (
            <div className="outgoing-requests">
                {Object.values(this.props.friendRequests.outgoing).map(req => (
                    <div key={`${req.id}-${req.user_id}-${req.friend_id}`} className="outgoing-request">
                        <p>{`${this.props.users[req.friend_id].first_name} ${this.props.users[req.friend_id].last_name}`}</p>
                        <button onClick={this.rejectFriend.bind(this,req.id)}>Unsend</button>
                    </div>
                ))}
            </div>
        )
    }

    renderFriendRequests () {
        // debugger
        if (this.state.incoming) return (
            <div className="incoming-requests-container">
                <p>Rendering incoming friend requests</p>
                {this.renderIncomingRequests()}
            </div>
        ); 
        else return (
            <div className="outgoing-requests-container">
                <p>Rendering outgoing friend requests like a thirsty bitch</p>
                {this.renderOutgoingRequests()}
            </div>
        );
    }

    renderCandidates () {
        return (
            <div id="potential-friends-container">
                <p>People You May Know</p>
                <hr/>
                <div id="potential-friends">
                    {Object.values(this.state.users).splice(0, 30).map((user, idx) => (
                        <div key={`${user.first_name}-${user.last_name}-${idx}`} className="potential-friend-request-container">
                            <p>{`${user.first_name} ${user.last_name}`}</p>
                            <button onClick={() => this.addFriend(user.id)}>Add Friend</button>
                            <button onClick={() => this.updateState(user.id)}>Remove</button>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    render () {
        return (
            <div id="find-friends-page-container">
                <NavbarContainer />
                <div id="find-friends-page">
                    {/* Friend Request Component */}
                    <div className="friend-requests-container">
                        {this.state.incoming ? this.checkForRequests('incoming') : this.checkForRequests()}
                        {this.renderFriendRequests()}
                        <button onClick={() => this.setState({
                            incoming: !this.state.incoming
                        })}>{this.state.incoming ? "View Sent Requests" : "View Received Requests"}</button>
                    </div>
                    { this.renderCandidates() }
                </div>
            </div>
        )
    }
}

export default FindFriends;