import React from 'react';

import NavbarContainer from '../navbar/navbar_container';

class FindFriends extends React.Component {
    constructor (props) {
        super(props);
        this.state = {}
        
    }
    
    populateState () {
        const { users, currentUser } = this.props;
        const candidates = Object.values(users).filter(user => (
            !currentUser.friendIds.includes(user.id) && user.id !== currentUser.id
        ));
        candidates.forEach(user => this.state[user.id] = user);
    }
    
    componentDidMount () {
        this.props.fetchFriendRequests().then();
        this.populateState();
    }

    renderFriendRequests (field) {

    }

    renderCandidates () {
        return (
            <div className="potential-friends-container">
                <p>People You May Know</p>
                <hr/>
                <div className="potential-friends">
                    {Object.values(this.state).map((user, idx) => (
                        <div key={`${user.first_name}-${user.last_name}-${idx}`} className="potential-friend-request-container">
                            <p>{`${user.first_name} ${user.last_name}`}</p>
                            <button>Add Friend</button>
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
                        {Object.keys(this.props.friendRequests.incoming).length === 0 ? (
                            <p>No New Friend Requests</p>
                        ) : (
                            this.renderFriendRequests()
                        )}
                    </div>
                    { this.renderCandidates() }
                </div>
            </div>
        )
    }
}

export default FindFriends;