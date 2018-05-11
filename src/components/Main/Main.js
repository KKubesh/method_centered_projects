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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.</p>
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