import React, { Component } from 'react';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import MethodForm from '../MethodForm/MethodForm';

class LoginDialog extends Component {
    // when loaded set open to false
    state = {
        open: false,
    };
    // switches open
    handleOpen = () => {
        this.setState({open: true});
    };
    // switches open
    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        return (
            <div>
                <Button variant="raised" color="primary" style={{margin: '10px'}} label="New Method" onClick={this.handleOpen}>New Method</Button>
                {/* shows dialog below when open is true */}
                <Dialog open={this.state.open} onClose={this.handleClose}>
                <DialogTitle>Create New Method</DialogTitle>
                <MethodForm handleClose={this.handleClose}/>
                </Dialog>
            </div>
        );
    }
}

export default LoginDialog;