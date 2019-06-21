import { connect } from 'react-redux';

import { requestUsers } from '../../actions/user_actions';
import SearchBar from './search_bar';

const msp = (state, ownProps) => ({
    users: state.entities.users,
    placeholderText: ownProps.placeholderText
});

const mdp = dispatch => ({
    requestUsers: () => dispatch(requestUsers())
});

const SearchBarContainer = connect(msp, mdp)(SearchBar);

export default SearchBarContainer;