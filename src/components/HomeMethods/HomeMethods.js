import React, { Component } from 'react';
import { connect } from 'react-redux';
import MethodItem from '../HomeMethodItem/HomeMethodItem';
// standard styling may need adjustments
const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    }
};

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
        let methods = this.props.state.method.map(method => {
            return (
                <MethodItem key={method.id} method={method}/>
            )
        })
        
        return(
            <div style={styles.root}>
                {methods}
            </div>
        )
    }
}

export default connect(mapStateToProps)(HomeMethods);