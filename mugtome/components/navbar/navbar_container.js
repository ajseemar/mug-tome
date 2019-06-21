import { connect } from 'react-redux';
import Navbar from './navbar';

const msp = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    placeholderText: ownProps.placeholderText
});

const mdp = dispatch => ({
    logout: () => dispatch(logout())
});

const NavbarContainer = connect(msp, mdp)(Navbar);

export default NavbarContainer;