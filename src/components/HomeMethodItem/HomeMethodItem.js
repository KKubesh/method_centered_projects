import React, { Component } from 'react';

class HomeMethodItem extends Component {
    
    render() {
    console.log(this.props.method.title);
        const imgMethod = `imagepath`
    
        
        return(
            <div>
                <h1>{this.props.method.image}</h1>
                <img src={imgMethod}/>
            </div>
        )
    }
}

export default HomeMethodItem;