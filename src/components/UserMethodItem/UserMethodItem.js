import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import Dialog from 'material-ui/Dialog';
import { Queue } from '@material-ui/icons';
import Card, { CardMedia, CardHeader } from 'material-ui/Card';
import Button from 'material-ui/Button';

const styles = {
    dialogStyling: {
        width: '80%',
        minWidth: '300px',
        padding: '30px',
    },
    root: {
        display: 'flex'
    },
    rootCard: {
        padding: '10px',
        margin: '5px',
    }
}

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
    
    render() { 
        
        return(
            <div style={styles.root}>
                <Card style={styles.rootCard} title={this.props.method.title}>
                    <CardHeader 
                        title={this.props.method.title}
                        action={
                            <IconButton>
                              <Queue />
                            </IconButton>
                        }
                    />
                    <CardMedia
                        style={{height: '290px', width: '290px'}}
                        image={this.props.method.image}
                        onClick={this.handleOpen}
                    />
                    
                </Card>
                <Dialog
                    title={this.props.method.title}
                    open={this.state.open}
                    onClose={this.handleClose}
                    style={styles.dialogStyling}
                >
                <img alt="method" height="250" width="250" src={this.props.method.image}/>
                <p>This is the existing method extended. Keep on writing more stuff and add more stuff in here. </p>
                </Dialog>
            </div>
        )
    }
}

export default AdminMethodItem;