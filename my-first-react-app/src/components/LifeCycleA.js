import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {

    constructor(props) {
        super(props)
        console.log("LifeCycleA : constructor");
        this.state = {
             name: 'LifeCycleA !'
        }
    }

    static getDerivedStateFromProps(props,state){
        console.log("LifeCycleA : getDerivedStateFromProps");
        return null;
    }
    
   


    render() {
        console.log("LifeCycleA : render");
        return (
            <div>
                {this.state.name}
                <LifeCycleB></LifeCycleB>
                <button onClick={this.handleUpdateEvent}>Update !</button>
            </div>
        )
    }

    handleUpdateEvent = () => {
        this.setState({
            name : 'LifeCycle A : Updated !'
        })
    }

    componentDidMount(){
        console.log("LifeCycleA : componentDidMount");
    }


    shouldComponentUpdate(nextProps,nextState){
        console.log("LifeCycleA : shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("LifeCycleA : getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate(){
        console.log("LifeCycleA : componentDidUpdate")
    }
    
}

export default LifeCycleA
