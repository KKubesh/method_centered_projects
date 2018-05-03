import React, { Component } from 'react';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import MethodForm from '../MethodForm/MethodForm';

const dialogStyling = {
    width: '80%',
    minWidth: '300px'
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
                <Button label="New Method" onClick={this.handleOpen}>New Method</Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                <DialogTitle>Create New Method</DialogTitle>
                <MethodForm handleClose={this.handleClose}/>
                </Dialog>
            </div>
        );
    }
}

export default LoginDialog;