import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GridList } from 'material-ui/GridList';
import AdminMethodItem from '../AdminMethodItem/AdminMethodItem';

const styles = {
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
                <AdminMethodItem key={method.id} method={method}/>
            )
        })
        
        return(
            <div style={styles.root}>
                <GridList 
                    cols={3}
                    cellHeight={320}                   
                    style={styles.gridList}
                >
                    {methods}
                </GridList>
            </div>
        )
    }
}

export default connect(mapStateToProps)(AdminMethods);