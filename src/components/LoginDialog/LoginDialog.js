import React, { Component } from 'react';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import LoginPage from '../LoginPage/LoginPage';

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
                <Button label="Sign In" onClick={this.handleOpen}>Sign In</Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle> Sign in to manage your content.</DialogTitle>
                    <LoginPage handleClose={this.handleClose}/>
                </Dialog>
            </div>
        );
    }
}

export default LoginDialog;