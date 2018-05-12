import React, { Component } from 'react';
import Dialog, { DialogTitle, DialogContentText } from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import RegisterPage from '../RegisterPage/RegisterPage';

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
                <Button variant="raised" color="primary" label="Register" onClick={this.handleOpen} style={{margin: '10px'}}>Register</Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                <DialogTitle>Create Account</DialogTitle>
                <DialogContentText style={{ justifyContent: 'center', display: 'flex'}}>
                    Manage your content.
                </DialogContentText>
                <RegisterPage handleClose={this.handleClose}/>
                </Dialog>
            </div>
        );
    }
}

export default LoginDialog;