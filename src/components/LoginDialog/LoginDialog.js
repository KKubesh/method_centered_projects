import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import LoginPage from '../LoginPage/LoginPage';

const loginStyling = {
    width: '100%',
    minWidth: '200px',
    maxWidth: '300px'
};

class LoginDialog extends Component {

    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        const actions = [
            <FlatButton
            label="Cancel"
            primary={true}
            onClick={this.handleClose}
            />,
            <FlatButton
            label="Submit"
            primary={true}
            disabled={true}
            onClick={this.handleClose}
            />,
        ];

        return (
            <div>
                <RaisedButton label="Login" onClick={this.handleOpen} />
                <Dialog
                    title="Login"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                    contentStyle={loginStyling}
                >
                Sign in to manage your content.
                <LoginPage/>
                </Dialog>
            </div>
        );
    }
}

export default LoginDialog;