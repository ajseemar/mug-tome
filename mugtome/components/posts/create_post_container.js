import { connect } from 'react-redux';
import CreatePostWidget from './create_post';

const msp = state => ({
    currentUser: state.entities.users[state.session.id]
});

const CreatePostWidgetContainer = connect(msp, null)(CreatePostWidget);

export default CreatePostWidgetContainer;