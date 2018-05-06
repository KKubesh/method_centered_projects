import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import Dialog from 'material-ui/Dialog';
import { FolderOpen } from '@material-ui/icons';
import Card, { CardMedia, CardHeader } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

const styles = {
    dialogStyling: {
        minWidth: '300px',
        padding: '30px',
    },
    root: {
        display: 'flex'
    },
    rootCard: {
        minWidth: '300px',
        padding: '10px',
        margin: '5px',
    }
}

class ProjectItem extends Component {

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
                <Card style={styles.rootCard} title={this.props.project.project_title}>
                    <CardHeader 
                        title={this.props.project.project_title}
                        action={
                            <IconButton>
                                <FolderOpen />
                            </IconButton>
                        }
                    />
                    {/* <CardMedia
                        style={{height: '290px', width: '290px'}}
                        image={this.props.project.image}
                        onClick={this.handleOpen}
                    /> */}
                    
                </Card>
            </div>
        )
    }
}

export default ProjectItem;