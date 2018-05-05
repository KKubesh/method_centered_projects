import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import Dialog from 'material-ui/Dialog';
import { DeleteForever } from '@material-ui/icons';
import { connect } from 'react-redux';
import { ActionDeleteForever } from 'material-ui';
import Card, { CardMedia, CardHeader } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button'

const styles = {
    // dialog is prevent overlap when screen is scaled down
    dialogStyling: {
        minWidth: '300px',
        margin: '30px',        
    },
    // root is meant to wrap all items
    root: {
        flexWrap: 'wrap',
    },
    // rootCard applies simple padding and margins for needed white space
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
    
    putMethod = () => {
        this.props.dispatch({
            type: 'PUT_METHOD',
            payload: this.props.method
        })
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
                                <DeleteForever onClick={this.delMethod}/>
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
                >
                    <Grid style={styles.dialogStyling} container spacing={24}>
                        <Grid item xs={6}>
                            <h2>
                                {this.props.method.title}
                            </h2>
                        </Grid>
                        <Grid item xs={6}>
                            <p>
                                * click text to edit
                                <IconButton style={{margin: '20px'}}>
                                    <DeleteForever onClick={this.delMethod}/>
                                </IconButton>
                            </p>
                        </Grid>
                        <Grid item xs={6}>
                            <img alt="method" height="250" width="250" src={this.props.method.image}/>
                        </Grid>
                        <Grid item xs={12}>
                            <p>{this.props.method.statements}</p>
                        </Grid>
                        <Grid item xs={6}>
                            <p style={{fontWeight: 'bold'}}>Time</p>
                            <p>{this.props.method.time_amount}</p>
                        </Grid>
                        <Grid item xs={6}>
                            <p style={{fontWeight: 'bold'}}>Diffculty</p>
                            <p>{this.props.method.diffculty}</p>
                        </Grid>
                        <Grid item xs={6}>
                            <p style={{fontWeight: 'bold'}}>Materials Needed</p>
                            <p>{this.props.method.need}</p>
                        </Grid>
                        <Grid item xs={6}>
                            <p style={{fontWeight: 'bold'}}>Participants</p>
                            <p>{this.props.method.participants}</p>
                        </Grid>
                        <Grid item xs={12}>
                            <p style={{fontWeight: 'bold'}}>Steps</p>
                            <p>{this.props.method.steps}</p>
                        </Grid>
                        <Button onClick={this.putMethod}>Save</Button>
                    </Grid>
                </Dialog>
            </div>
        )
    }
}

export default connect(mapStateToProps)(AdminMethodItem);