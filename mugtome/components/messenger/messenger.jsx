import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import MessengerSearchBar from './messenger_search_bar';

class Messenger extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="messenger-page">
                <NavbarContainer />
                <main>
                    <section className='contact-navigator'>
                        <header>
                            <i className="fas fa-cog"></i>
                            <p>Messages</p>
                            <i className="far fa-edit"></i>
                        </header>
                        <div className='messenger-search'>
                            <MessengerSearchBar />
                        </div>
                        <div>
                            <ul className="message-list"></ul>
                        </div>
                    </section>
                    <section>
                        <div className='conversation-container'></div>
                        <div className='conversation-settings-container'></div>
                    </section>
                </main>
            </div>
        );
    }
}

export default Messenger;