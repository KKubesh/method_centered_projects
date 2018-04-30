import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
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
        return (
            <div>
                <RaisedButton label="Sign In" onClick={this.handleOpen} />
                <Dialog
                    title="Sign In"
                    modal={false}
                    open={this.state.open}
                    contentStyle={loginStyling}
                >
                Sign in to manage your content.
                <LoginPage handleClose={this.handleClose}/>
                </Dialog>
            </div>
        );
    }
}

export default LoginDialog;