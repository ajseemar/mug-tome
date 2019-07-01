import { connect } from 'react-redux';
import Messenger from './messenger';

const msp = state => ({

});

const mdp = dispatch => ({

});

const MessengerContainer = connect(msp, mdp)(Messenger);

export default MessengerContainer;