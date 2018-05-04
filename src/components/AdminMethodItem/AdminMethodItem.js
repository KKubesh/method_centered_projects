import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import Dialog from 'material-ui/Dialog';
import { DeleteForever } from '@material-ui/icons';
import { connect } from 'react-redux';
import { ActionDeleteForever } from 'material-ui';
import Card, { CardMedia, CardHeader } from 'material-ui/Card';

const styles = {
    dialogStyling: {
        width: '80%',
        minWidth: '300px',
        padding: '30px',        
    },
    root: {
        flexWrap: 'wrap',
    },
    rootCard: {
        padding: '10px',
        margin: '5px',
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
                <Card style={styles.rootCard} title={this.props.method.title}>
                    <CardHeader 
                        title={this.props.method.title}
                        action={
                            <IconButton>
                                <DeleteForever />
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
                <p>This is the existing method extended admin. Keep on writing more stuff and add more stuff in here. </p>
                </Dialog>
            </div>
        )
    }
}

export default connect(mapStateToProps)(AdminMethodItem);