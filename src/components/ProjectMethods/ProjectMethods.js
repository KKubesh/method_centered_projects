import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectMethodItem from '../ProjectMethodItem/ProjectMethodItem';

const styles = {
    root: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    }
};

const mapStateToProps = state => ({
    state,
});

class ProjectMethods extends Component {
    componentDidMount() {
        // use component did mount to dispatch an action to request the methodsList from the API
        this.props.dispatch({
            type: 'GET_METHOD'
        })
    }

    render() {
        let methods = this.props.state.method.map(method => {
            return (
                <ProjectMethodItem key={method.id} method={method} currentProject={this.props.currentProject}/>
            )
        })
        
        return(
            <div style={styles.root}>
                    {methods}
            </div>
        )
    }
}

export default connect(mapStateToProps)(ProjectMethods);