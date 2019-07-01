import React from 'react';

class MessengerSearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form>
                <div className="search-input">
                    <i className="fas fa-search" />
                    <input type="text" placeholder="Search Messenger" />
                </div>
            </form>
        );
    }
}

export default MessengerSearchBar;