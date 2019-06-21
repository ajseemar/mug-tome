import React from 'react';

import NavbarContainer from '../navbar/navbar_container';

class Home extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div id="home-page-container">
            <NavbarContainer />
            <h1>Home Page</h1>
            </div>
        )
    }
}

export default Home;