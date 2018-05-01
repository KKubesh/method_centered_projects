import React, { Component } from 'react';
import { connect } from 'react-redux';
import MethodItem from '../HomeMethodItem/HomeMethodItem';

const mapStateToProps = state => ({
    state,
});

class HomeMethods extends Component {
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
                <MethodItem key={method.id} method={method}/>
            )
        })
        
        return(
            <div>
                <h1>Home Methods</h1>
                {methods}
            </div>
        )
    }
}

export default connect(mapStateToProps)(HomeMethods);