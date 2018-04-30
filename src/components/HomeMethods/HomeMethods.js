import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    state,
});

class HomeMethods extends Component {
    componentDidMount() {
        // use component did mount to dispatch an action to request the methodsList from the API
        this.props.dispatch({
            type: 'GET_METHODS'
        })
    }

    render() {
        return(
            <div>
                This is where where we will make all the cards of each method
            </div>
        )
    }
}

export default connect(mapStateToProps)(HomeMethods);