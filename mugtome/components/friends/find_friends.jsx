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
        const { users, currentUser } = this.props;
        const candidates = Object.values(users).filter(user => (
            !currentUser.friendIds.includes(user.id) && user.id !== currentUser.id
        ));
        candidates.forEach(user => this.state.users[user.id] = user);
    }
    
    componentDidMount () {
        this.props.fetchFriendRequests().then(() => this.populateState());
        // this.populateState();
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

    renderFriendRequests () {
        if (this.state.incoming) return (
            <div className="incoming-requests-container">
                <p>Rendering incoming friend requests</p>
                {Object.values(this.props.friendRequests.incoming).map(req => (
                    <div className="incoming-request">
                        <p>{`${this.props.users[req.user_id].first_name} ${this.props.users[req.user_id].last_name}`}</p>
                        <button onClick={() => this.props.acceptFriendRequest(req)}>Accept</button>
                        <button onClick={() => this.props.deleteFriendRequest(req.id)}>Reject</button>
                    </div>
                ))}
            </div>
        ); 
        else return (
            <div className="incoming-requests-container">
                <p>Rendering outgoing friend requests like a thirsty bitch</p>
                {Object.values(this.props.friendRequests.outgoing).map(req => (
                    <div className="incoming-request">
                        <p>{`${this.props.users[req.friend_id].first_name} ${this.props.users[req.friend_id].last_name}`}</p>
                        <button onClick={() => this.props.deleteFriendRequest(req.id)}>Unsend</button>
                    </div>
                ))}
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
                            <button onClick={() => this.props.createFriendRequest({friendRequest: {user_id: this.props.currentUser.id, friend_id: user.id }})}>Add Friend</button>
                            <button onClick={() => delete this.state[user.id]}>Remove</button>
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
                        {/* {this.renderFriendRequests()} */}
                        <button onClick={() => this.setState({
                            incoming: !this.state.incoming
                        })}>{this.incoming ? "View Sent Requests" : "View Received Requests"}</button>
                    </div>
                    { this.renderCandidates() }
                </div>
            </div>
        )
    }
}

export default FindFriends;