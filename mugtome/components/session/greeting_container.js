import { connect } from 'react-redux';
import Greeting from './greeting';
import { login, signup } from '../../actions/session_actions';

const msp = state => ({
    errors: state.errors.session
});

const mdp = dispatch => ({
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user)),
});

export default connect(msp, mdp)(Greeting);