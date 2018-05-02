import React, { Component } from 'react';
import { GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import AddMethodIcon from 'material-ui/svg-icons/av/library-add';

class AdminMethodItem extends Component {
    
    render() {
    console.log(this.props.method.title);
        const imgMethod = `imagepath`
    
        
        return(
            <GridTile key={this.props.method.id}
                titlePosition="top"
                title={this.props.method.title}
                subtitle={<span><b>{this.props.method.description}</b></span>}
                actionIcon={<IconButton><AddMethodIcon color="white" /></IconButton>}
            >
                <img height="250" width="250" src={this.props.method.image}/>
            </GridTile>
        )
    }
}

export default AdminMethodItem;