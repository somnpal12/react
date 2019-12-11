import React, { Component } from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComp'

export default class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'somnath !'
        }
    }
    
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name : 'somnath !'
            })
        }, 2000)
    }

    render() {
        console.log('Parent Component')
        return (
            <div>
                Parent Component !
                <RegularComp name={this.state.name}/>
                <PureComp name={this.state.name}/>
            </div>
        )
    }
}
