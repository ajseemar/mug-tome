import React from 'react';
import { Link } from 'react-router-dom';

const MONTHS = {
    "January": "01",
    "February": "02",
    "March": "03",
    "April": "04",
    "May": "05",
    "June": "06",
    "July": "07",
    "August": "08",
    "September": "09",
    "October": "10",
    "November": "11",
    "December": "12"
};
const DAYS = [...Array(31).keys()];
const YEARS = [...Array(2020).keys()].slice(1920).reverse();

class Greeting extends React.Component {
    constructor (props) {
        super(props);
    }

    handleDemoLogin (e) {
        e.preventDefault();
        console.log('demo');
    }
    
    handleFormSubmit (e) {
        e.preventDefault();
        console.log('new');
    }

    render () {
        return (
            <div id='greeting-container'>
                <header id='logged-out-header'>
                    <div id="login-form-container">
                        <span>Mugtome</span>
                        <form>
                            <label htmlFor="email">Email</label>
                            <input id='email' type="text" placeholder="Enter email"/>
                            <label htmlFor="password">Password</label>
                            <input id='password' type="password" placeholder="Enter password"/>
                            <input id='login-button' type="submit" value="Log In"/>
                        </form>
                    </div>
                </header>

                <main id='greeting-main'>
                    <div id="greeting-main-container">
                        <div id="self-adverts">
                            <div id="adverts-container">
                                <div id="connect-advert-container">
                                    <img src={connectImgUrl} alt=""/>
                                    <p><b>Connect with</b> friends and <b>the world</b> around you <b>with Mugtome</b></p>
                                </div>
                                <div id="friends-advert-container">
                                    <img src={findFriendsImgUrl} alt=""/>
                                    <p><b>See photos and updates</b> from friends in your News Feed</p>
                                </div>
                                <div id="life-updates-advert-container">
                                    <img src={lifeUpdatesImgUrl} alt=""/>
                                    <p><b>Share what's new</b> in your life on your Timeline</p>
                                </div>
                                <div id="search-advert-container">
                                    <img src={searchImgUrl} alt=""/>
                                    <p><b>Find what you're looking for</b> with Mugtome Search</p>
                                </div>
                            </div>
                        </div>
                        <div id="signup-form-container">
                            <h1>Create a New Account</h1>
                            <h5>It's free and always will be</h5>
                            <form onSubmit={this.handleFormSubmit.bind(this)}>
                                <div id="name-input-container">
                                    <input id="fname" type="text" placeholder="First Name"/>
                                    <input id="lname" type="text" placeholder="Last Name"/>
                                </div>
                                <div id='email-input-container'>
                                <input type="email" placeholder="Email"/>
                                </div>
                                <div id='password-input-container'>
                                <input type="password" placeholder="New Password"/>
                                </div>
                                <div id="dob-input-container">
                                    <label htmlFor="birthday">Birthday</label>
                                    <div id="dob-selectors">
                                        <select name="month" required>
                                            <option value="">Month</option>
                                            {Object.keys(MONTHS).map((mth, idx) => (
                                                <option key={idx} value={MONTHS[mth]}>{mth}</option>
                                                ))}
                                        </select>
                                        <select name="day" required>
                                            <option value="">Day</option>
                                            {DAYS.map((day, idx) => <option key={idx} value={day < 10 ? `0${day}` : day}>{day}</option>)}
                                        </select>
                                        <select name="year" required>
                                            <option value="">Year</option>
                                            {YEARS.map((yr, idx) => <option key={idx} value={yr}>{yr}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <div id="gender-input-container">
                                    <label id="gender-input-label" htmlFor="gender-selector">Gender</label>
                                    <div id="gender-selector">
                                        <div>
                                        <input id='male-gender-selector' type="radio" value="Male"/>
                                            <label htmlFor="male-gender-selector">Male</label>
                                        </div>
                                        <div>
                                        <input id='female-gender-selector' type="radio" value="Female"/>
                                            <label htmlFor="female-gender-selector">Female</label>
                                        </div>
                                    </div>
                                </div>
                                <p>
                                    By clicking Sign Up, you agree to our Terms, Data Policy and Cookies Policy.
                                </p>
                                <div className="" id="action-buttons">
                                    <input id='signup-button' type="submit" value="Sign Up"/>
                                    <button id ='demo-login-button' onClick={this.handleDemoLogin.bind(this)}>Demo Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>

                <footer id='footer-main-container'>
                    <div id="footer-main">
                    <div id="footer-elements">
                    <ul className="footer-main-languages">
                        <li>English (US)</li>
                        <li><Link to="/">Español</Link></li>
                        <li><Link to="/">Français (France)</Link></li>
                        <li><Link to="/">中文(简体)</Link></li>
                        <li><Link to="/">العربية</Link></li>
                        <li><Link to="/">Português (Brasil)</Link></li>
                        <li><Link to="/">Italiano</Link></li>
                        <li><Link to="/">한국어</Link></li>
                        <li><Link to="/">Deutsch</Link></li>
                        <li><Link to="/">हिन्दी</Link></li>
                        <li><Link to="/">日本語</Link></li>
                    </ul>
                    <ul className="footer-main-nav">
                        <li><Link to="/">Sign Up</Link></li>
                        <li><Link to="/">Log In</Link></li>
                        <li><Link to="/">Messenger</Link></li>
                        <li><Link to="/">Facebook Lite</Link></li>
                        <li><Link to="/">Find Friends</Link></li>
                        <li><Link to="/">People</Link></li>
                        <li><Link to="/">Profiles</Link></li>
                        <li><Link to="/">Pages</Link></li>
                        <li><Link to="/">Page Categories</Link></li>
                        <li><Link to="/">Places</Link></li>
                        <li><Link to="/">Games</Link></li>
                        <li><Link to="/">Locations</Link></li>
                        <li><Link to="/">Marketplace</Link></li>
                        <li><Link to="/">Groups</Link></li>
                        <li><Link to="/">Instagram</Link></li>
                        <li><Link to="/">Local</Link></li>
                        <li><Link to="/">Fundraisers</Link></li>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/">Create Ad</Link></li>
                        <li><Link to="/">Create Page</Link></li>
                        <li><Link to="/">Developers</Link></li>
                        <li><Link to="/">Careers</Link></li>
                        <li><Link to="/">Privacy</Link></li>
                    </ul>
                    <small className="footer-main-copyright">Mugtome &#9728; 2019</small>
                    </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Greeting;
