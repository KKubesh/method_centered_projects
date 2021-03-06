import React, { Component } from 'react';
import { connect } from 'react-redux';

import IconButton from 'material-ui/IconButton';
import Dialog from 'material-ui/Dialog';
import { Queue, IndeterminateCheckBox } from '@material-ui/icons';
import Card, { CardMedia, CardHeader } from 'material-ui/Card';
import Grid from 'material-ui/Grid';

const styles = {
    dialogStyling: {
        padding: '30px',
    },
    rootCard: {
        padding: '10px',
        margin: '5px',
    }
}

const mapStateToProps = state => ({
    bookmark: state.bookmark
});

class ProjectMethodItem extends Component {

    state = {
        open: false,
        bookmarkItem: {
            project_id: parseInt(this.props.currentProject.id),
            method_id: this.props.method.id,
            // bookmark_id: 
        }
    };

    componentDidMount() {
        // use component did mount to dispatch an action to request the bookmarks from the API        
        this.props.dispatch({
            type: 'GET_BOOKMARK',
            payload: this.state.bookmarkItem
        })
    }

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    bookmarkMethod = () => {
        this.props.dispatch({
            type: 'POST_BOOKMARK',
            payload: this.state.bookmarkItem
        })
    }

    unbookmarkMethod = () => {
        this.props.dispatch({
            type: 'DEL_BOOKMARK',
            payload: this.state.bookmarkItem
        })
    }
    
    render() { 
        let methodItem = this.props.method.id
        let bookmarkButton = null;
        if (this.props.bookmark.find(function (val) {
            return (val.method_id === methodItem);                               
            })
        ) { 
            bookmarkButton =
                <IconButton style={{backgroundColor: '#ffebdd', color: '#e1813f'}} onClick={this.unbookmarkMethod}>
                    <IndeterminateCheckBox />
                </IconButton>
        } else {
            bookmarkButton =
                <IconButton onClick={this.bookmarkMethod}>
                    <Queue />
                </IconButton>
        }
        return(
            <Grid item>
                <Card style={styles.rootCard} title={this.props.method.title}>
                    <CardHeader 
                        title={this.props.method.title}
                        action={
                            <div>
                                {bookmarkButton}                            
                            </div>    
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
                            <h1 style={{textAlign: 'left', padding: '20px' }}>
                                {this.props.method.title}
                                <span style={{padding: '20px'}}>{bookmarkButton}</span>
                            </h1>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <img alt="method" height="250" width="250" src={this.props.method.image}/>
                        </Grid>
                        <Grid item sm={6} xs={12} style={{alignItems: 'center', display: 'flex', padding: '5px'}}>
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

export default connect(mapStateToProps)(ProjectMethodItem);