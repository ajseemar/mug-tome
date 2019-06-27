import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import CreatePostWidgetContainer from '../posts/create_post_container';
// import LoginFormContainer from '../session_form/login_form_container';
// import SignupFormContainer from '../session_form/signup_form_container';

function Modal(props) {
    const { modal, closeModal } = props;
    if (!modal) {
        return null;
    }
    let component;
    switch (modal.component) {
        // case 'login':
        //     component = <LoginFormContainer />;
        //     break;
        // case 'signup':
        //     component = <SignupFormContainer />;
        //     break;
        case 'create_post':
            // debugger
            component = (
                <div className="create-post-modal-container">
                    <CreatePostWidgetContainer id={modal.id}/>
                </div>
            );
            break;
        default:
            // debugger
            return null;
            // component = <h1>Create Post Form should go here bro</h1>;
            // break;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);