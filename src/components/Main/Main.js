import React, { Component } from 'react';
import LoginDialog from '../LoginDialog/LoginDialog';
import RegisterDialog from '../RegisterDialog/RegisterDialog';

class Main extends Component {

    render() {
        return(
            <div>
                <div>
                    <h2>Image and Content here</h2>
                </div>
                <div>
                    <LoginDialog /> 
                    <RegisterDialog />
                </div>
                <div>
                    {/* <HomeMethods/> */}
                </div>
            </div>
        )
    }
}

export default Main;