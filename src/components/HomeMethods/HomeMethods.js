import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GridList } from 'material-ui/GridList';
import MethodItem from '../HomeMethodItem/HomeMethodItem';

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

export default connect(mapStateToProps)(HomeMethods);