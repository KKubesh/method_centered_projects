import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import Dialog from 'material-ui/Dialog';
import Icon from 'material-ui/Icon';

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
class HomeMethodItem extends Component {

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
        
        return(
            <div style={styles.root}>
                    <img alt="method" height="250" width="250" src={this.props.method.image} onClick={this.handleOpen}/>
                <Dialog
                    title={this.props.method.title}
                    // modal={false}
                    open={this.state.open}
                    // contentStyle={styles.dialogStyling}
                    onClose={this.handleClose}
                >
                <img alt="method" height="250" width="250" src={this.props.method.image}/>
                <p>This is the existing method extended. Keep on writing more stuff and add more stuff in here. </p>
                </Dialog>
            </div>
        )
    }
}

export default HomeMethodItem;