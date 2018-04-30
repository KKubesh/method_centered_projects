import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import LoginPage from '../RegisterPage/RegisterPage';
import RegisterPage from '../RegisterPage/RegisterPage';

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
                <RaisedButton label="Register" onClick={this.handleOpen} />
                <Dialog
                    title="Register"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                    contentStyle={loginStyling}
                >
                Create account to manage your content.
                <RegisterPage/>
                </Dialog>
            </div>
        );
    }
}

export default LoginDialog;