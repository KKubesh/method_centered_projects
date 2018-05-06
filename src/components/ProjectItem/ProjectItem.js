import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import { FolderOpen } from '@material-ui/icons';
import Card, { CardMedia, CardHeader } from 'material-ui/Card';

const styles = {
    rootCard: {
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
        )
    }
}

export default ProjectItem;