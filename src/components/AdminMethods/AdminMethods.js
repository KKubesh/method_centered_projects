import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminMethodItem from '../AdminMethodItem/AdminMethodItem';

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
                <AdminMethodItem key={method.id} method={method}/>
            )
        })
        
        return(
            <div>
                <h1>Admin Methods</h1>
                {methods}
            </div>
        )
    }
}

export default connect(mapStateToProps)(AdminMethods);