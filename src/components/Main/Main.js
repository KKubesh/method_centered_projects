import React, { Component } from 'react';
import LoginDialog from '../LoginDialog/LoginDialog';
import RegisterDialog from '../RegisterDialog/RegisterDialog';
import HomeMethods from '../HomeMethods/HomeMethods';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    state,
});

class Main extends Component {

    render() {
        console.log('MAIN LOADED');
        
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
                    List of methods
                    <HomeMethods/>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Main);