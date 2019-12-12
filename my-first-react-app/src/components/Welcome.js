import React, { Component } from 'react';

class  Welcome extends Component{
    render() {
        console.log(this.props.name)
    return <p>Good Morning : {this.props.name}</p>
    }
}

export default Welcome;