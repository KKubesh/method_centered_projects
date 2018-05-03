import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserMethodItem from '../UserMethodItem/UserMethodItem';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 960,
        height: 960,
        overflowY: 'auto',
    },
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
        console.log(this.props.state.method);
        let methods = this.props.state.method.map(method => {
            return (
                <UserMethodItem key={method.id} method={method}/>
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