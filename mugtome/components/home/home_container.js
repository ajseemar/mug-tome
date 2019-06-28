import { connect } from 'react-redux';
import Home from './home';
import { requestPosts } from '../../actions/post_actions';

const msp = state => ({
    posts: state.entities.posts,
    currentUser: state.entities.users[state.session.id]
});

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    requestPosts: () => dispatch(requestPosts())
});

const HomeContainer = connect(msp, mdp)(Home);

export default HomeContainer;