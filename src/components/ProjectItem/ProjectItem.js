import React, { Component } from 'react';
import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton';
import { FolderOpen, DeleteForever } from '@material-ui/icons';
import Card, { CardMedia, CardHeader } from 'material-ui/Card';

const styles = {
    rootCard: {
        padding: '10px',
        margin: '5px',
    }
}

const mapStateToProps = state => ({
    state
});

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

    delProject = () => {
        this.props.dispatch({
            type: 'DEL_PROJECT',
            payload: this.props.project
        })
    }
    
    render() { 
        
        return(
            <Card style={styles.rootCard} title={this.props.project.project_title}>
                <CardHeader 
                    title={this.props.project.project_title}
                    action={
                        <div>
                            <IconButton>
                                <FolderOpen />
                            </IconButton>
                            <IconButton>
                                <DeleteForever onClick={this.delProject}/>
                            </IconButton>
                        </div>
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

export default connect(mapStateToProps)(ProjectItem);