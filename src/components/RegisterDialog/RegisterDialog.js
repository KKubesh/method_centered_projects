import React, { Component } from 'react';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
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
                <DialogTitle style={{width: '200px'}} >Create an account to manage your content.</DialogTitle>
                <RegisterPage style={{width: '200px'}}  handleClose={this.handleClose}/>
                </Dialog>
            </div>
        );
    }
}

export default LoginDialog;