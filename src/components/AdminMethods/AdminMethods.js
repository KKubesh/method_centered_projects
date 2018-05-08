import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminMethodItem from '../AdminMethodItem/AdminMethodItem';
// styling added to wrap items being added through the mapped content
const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    }
};

const mapStateToProps = state => ({
    state,
});

class AdminMethods extends Component {
    componentDidMount() {
        // use component did mount to dispatch an action to request the methodsList from the API
        this.props.dispatch({
            type: 'GET_METHOD'
        })
    }

    render() {
        let methods = this.props.state.method.map(method => {
            return (
                <AdminMethodItem key={method.id} method={method}/>
            )
        })
        
        return(
            <div style={styles.root}>
                {methods}
            </div>
        )
    }
}

export default connect(mapStateToProps)(AdminMethods);