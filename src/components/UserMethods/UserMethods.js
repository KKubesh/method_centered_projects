import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserMethodItem from '../UserMethodItem/UserMethodItem';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        maxWidth: '960px'
    }
};

const mapStateToProps = state => ({
    state,
});

class UserMethods extends Component {
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

export default connect(mapStateToProps)(UserMethods);