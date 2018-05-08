import React, { Component } from 'react';
import LoginDialog from '../LoginDialog/LoginDialog';
import RegisterDialog from '../RegisterDialog/RegisterDialog';
import HomeMethods from '../HomeMethods/HomeMethods';
import { connect } from 'react-redux';
// standard styling maybe need adjustments
const styles = {
    root: {       
        flexGrow: 1,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        justify: 'center',
        alignItems: 'center',
        maxWidth: '960px',        
    }
};

const mapStateToProps = state => ({
    state,
});

class Main extends Component {
    render() {
        return(
            <div style={styles.root}>
                <div className="center-item">
                    <h2>Image and Content here</h2>
                </div>
                <div className="center-item">
                    {/* buttons below for dialogs */}
                    <LoginDialog />
                    <RegisterDialog />
                </div>
                <div>
                    {/* standard methods */}
                    <h2>Methods</h2>
                    <HomeMethods/>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Main);