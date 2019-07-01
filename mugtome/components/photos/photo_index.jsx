import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import ProfileNavbar from '../user/profile_navbar';

class PhotoIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="profile-page-container">
                <NavbarContainer />
                <div id='photo-page-content' className="profile-page-content">
                    <ProfileNavbar currentUser={this.props.currentUser} match={this.props.match} />
                    <header className='photo-header'>
                        <div className="main-header">
                            <div className='main-header-sub'>
                                <div className="component-title">
                                    <img src={window.photoImgUrl} />
                                    <div className='main-title'>Photos</div>
                                </div>
                                <div className="component-actions">
                                    <div className="create-actions">
                                        <button>+ Create Album</button><button>Add Photos</button>
                                    </div>
                                </div>
                            </div>
                            <nav>
                                <div>Your Photos</div>
                                <div>Albums</div>
                            </nav>
                        </div>
                    </header>
                    <main>
                        <div className="photo-index-container">

                        </div>
                    </main>
                </div>
            </div>
        )
    }
}

export default PhotoIndex;