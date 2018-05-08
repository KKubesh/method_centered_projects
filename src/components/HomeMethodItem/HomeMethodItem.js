import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import Dialog from 'material-ui/Dialog';
import { Queue } from '@material-ui/icons';
import Card, { CardMedia, CardHeader } from 'material-ui/Card';
import Grid from 'material-ui/Grid';

const styles = {
    dialogStyling: {
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
                    <Grid style={styles.dialogStyling} container spacing={24}>
                        <Grid item xs={12}>
                            <h2>
                                {this.props.method.title}
                                <IconButton style={{margin: '20px'}}>
                                    <Queue />
                                </IconButton>   
                            </h2>
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
                    </Grid>
                </Dialog>
            </div>
        )
    }
}

export default HomeMethodItem;