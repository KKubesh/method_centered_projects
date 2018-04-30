import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
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
        return (
            <div>
                <RaisedButton label="Register" onClick={this.handleOpen} />
                <Dialog
                    title="Register"
                    modal={false}
                    open={this.state.open}
                    contentStyle={loginStyling}
                >
                Create account to manage your content.
                <RegisterPage handleClose={this.handleClose}/>
                </Dialog>
            </div>
        );
    }
}

export default LoginDialog;