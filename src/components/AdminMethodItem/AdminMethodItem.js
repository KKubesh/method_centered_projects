import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import Dialog from 'material-ui/Dialog';
import Icon from 'material-ui/Icon';
import { connect } from 'react-redux';
import { ActionDeleteForever } from 'material-ui';

const styles = {
    dialogStyling: {
        width: '80%',
        minWidth: '300px'
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    }
}

const mapStateToProps = state => ({
    state,
});

class AdminMethodItem extends Component {

    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    handleClick = () => {
        this.delMethod(this.props.method)
    }

    delMethod = () => {
        this.props.dispatch({
            type: 'DEL_METHOD',
            payload: this.props.method
        })
    } 
    
    render() { 
        
        return(
            <div style={styles.root}>
                        <img alt="method" height="250" width="250" src={this.props.method.image} onClick={this.handleOpen}/>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                <img alt="method" height="250" width="250" src={this.props.method.image}/>
                <p>This is the existing method for the admin editing. Keep on writing more stuff and add more stuff in here. </p>
                </Dialog>
            </div>
        )
    }
}

export default connect(mapStateToProps)(AdminMethodItem);