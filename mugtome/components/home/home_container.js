import { connect } from 'react-redux';
import Home from './home';

const msp = state => ({

});

const mdp = dispatch => ({
    logout: () => dispatch(logout())
});

const HomeContainer = connect(msp, mdp)(Home);

export default HomeContainer;