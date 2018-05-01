import React, { Component } from 'react';

class AdminMethodItem extends Component {
    
    render() {
    console.log(this.props.method.title);
        const imgMethod = `imagepath`
    
        
        return(
            <div>
                <h1>{this.props.method.image}</h1>
                <img src={imgMethod}/>
                <button>more</button>
                <button>buttons</button>
            </div>
        )
    }
}

export default AdminMethodItem;