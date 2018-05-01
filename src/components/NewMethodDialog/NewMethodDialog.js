import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
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
                <RaisedButton label="New Method" onClick={this.handleOpen} />
                <Dialog
                    title="New Method"
                    modal={false}
                    open={this.state.open}
                    contentStyle={dialogStyling}
                >
                Sign in to manage your content.
                <MethodForm handleClose={this.handleClose}/>
                </Dialog>
            </div>
        );
    }
}

export default LoginDialog;