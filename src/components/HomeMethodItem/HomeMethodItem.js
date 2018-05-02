import React, { Component } from 'react';
import { GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Dialog from 'material-ui/Dialog';
import AddMethodIcon from 'material-ui/svg-icons/av/library-add';

const dialogStyling = {
    width: '80%',
    minWidth: '300px'
};

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    }
}
class HomeMethodItem extends Component {

    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };
    
    render() {
    console.log(this.props.method.title);
        const imgMethod = `imagepath`
    
        
        return(
            <div style={styles.root}>
                <GridTile key={this.props.method.id}
                    titlePosition="top"
                    title={this.props.method.title}
                    subtitle={<span><b>{this.props.method.description}</b></span>}
                    actionIcon={<IconButton><AddMethodIcon color="white" /></IconButton>}
                    onClick={this.handleOpen}
                >
                    <img height="250" width="250" src={this.props.method.image}/>
                </GridTile>
                <Dialog
                    title={this.props.method.title}
                    modal={false}
                    open={this.state.open}
                    contentStyle={dialogStyling}
                    onRequestClose={this.handleClose}
                >
                <img height="250" width="250" src={this.props.method.image}/>
                <p>This is the existing method extended. Keep on writing more stuff and add more stuff in here. </p>
                </Dialog>
            </div>
        )
    }
}

export default HomeMethodItem;