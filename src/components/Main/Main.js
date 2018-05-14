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
                <div style={{padding: '40px'}}>
                    <p>Human Centered Design (HCD) is a framework to manage the design process by involving the human perspective during the problem solving process. There are a series of HCD methods which originate from IDEO.org Design Kit. This application was created to manage methods being used on a project basis. To find more information on IDEO.org Design Kit please visit <a href="http://www.designkit.org/">designkit.org</a>. Create an account to manage your projects and methods.</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px'}}>
                    {/* buttons below for dialogs */}
                    <LoginDialog />
                    <RegisterDialog />
                </div>
                <div>
                    {/* standard methods */}
                    <h1>Methods</h1>
                    <HomeMethods/>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Main);