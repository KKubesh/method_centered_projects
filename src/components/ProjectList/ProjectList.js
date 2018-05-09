import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectItem from '../ProjectItem/ProjectItem';

const mapStateToProps = state => ({
    state,
});

class ProjectList extends Component {
    componentDidMount() {
        // use component did mount to dispatch an action to request the methodsList from the API
        this.props.dispatch({
            type: 'GET_PROJECT'
        })
    }

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
        console.log(this.props.state.project);
        let projects = this.props.state.project.map(project => {
            return (
                <ProjectItem key={project.id} project={project}/>
            )
        })

        return(
            <div>
                {projects}
            </div>
        )
    }
}

export default connect(mapStateToProps)(ProjectList);