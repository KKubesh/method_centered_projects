import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import Dialog from 'material-ui/Dialog';
import { Queue } from '@material-ui/icons';
import Card, { CardMedia, CardHeader } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import UserMethodNotice from '../UserMethodNoticeDialog/UserMethodNoticeDialog';

const styles = {
    dialogStyling: {
        padding: '30px',
    },
    rootCard: {
        padding: '10px',
        margin: '5px',
    }
}

class UserMethodItem extends Component {

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
            <Grid item>
                <Card style={styles.rootCard} title={this.props.method.title}>
                    <CardHeader 
                        title={this.props.method.title}
                        action={
                            <UserMethodNotice handleAddMethod={this.props.handleAddMethod} methodItem={this.props.method}/>
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
                    <Grid style={styles.dialogStyling} container spacing={16}>
                        <Grid item xs={12} >
                            <h1 style={{textAlign: 'left', padding: '20px'}}>
                                {this.props.method.title}
                            <UserMethodNotice handleAddMethod={this.props.handleAddMethod} style={{margin: '20px'}} methodItem={this.props.method}/>                                   
                            </h1>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <img alt="method" height="250" width="250" src={this.props.method.image}/>
                        </Grid>
                        <Grid style={{alignItems: 'center', display: 'flex', padding: '5px'}} item sm={6} xs={12}>
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
            </Grid>
        )
    }
}

export default UserMethodItem;