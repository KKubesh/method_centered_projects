import React, { Component } from 'react';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import LoginPage from '../LoginPage/LoginPage';

class LoginDialog extends Component {
    // dialog status established
    state = {
        open: false,
    };
    // dialog status change
    handleOpen = () => {
        this.setState({open: true});
    };
    // dialog status change
    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        return (
            <div>
                <Button variant="raised" color="primary" label="Sign In" onClick={this.handleOpen} style={{margin: '10px', width: '105px'}}>Sign In</Button>
                {/* dialog appears when open is true */}
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle><h2>Sign in</h2><h2>manage your content</h2></DialogTitle>
                    <LoginPage handleClose={this.handleClose}/>
                </Dialog>
            </div>
        );
    }
}

export default LoginDialog;