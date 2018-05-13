import React, { Component } from 'react';
import Dialog, { DialogTitle, DialogContentText } from 'material-ui/Dialog';
import { Queue } from '@material-ui/icons';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import LoginDialog from '../LoginDialog/LoginDialog';
import RegisterDialog from '../RegisterDialog/RegisterDialog';

class MethodNotice extends Component {
    // dialog status established
    state = {
        open: false,
    };
    // dialog status change
    handleOpen = () => {
        this.setState({open: true});
        console.log('fired handleopen');
        
    };
    // dialog status change
    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        return (
            <div style={{minWidth: '30px'}}>
                <IconButton onClick={this.handleOpen} style={{margin: '20px'}}>
                    <Queue />
                </IconButton> 
                {/* dialog appears when open is true */}
                <Dialog open={this.state.open} onClose={this.handleClose} className="signIn" >
                    <DialogTitle>Adding a Method</DialogTitle>
                    <DialogContentText style={{ justifyContent: 'center', display: 'flex', padding: '30px', maxWidth: '300px' }}>
                        If you are interested in saving this method for your project sign in or create an account.
                    </DialogContentText >
                </Dialog>
            </div>
        );
    }
}

export default MethodNotice;