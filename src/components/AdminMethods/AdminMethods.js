import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminMethodItem from '../AdminMethodItem/AdminMethodItem';

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
            <div style={styles.root}>
                    {methods}
            </div>
        )
    }
}

export default connect(mapStateToProps)(AdminMethods);