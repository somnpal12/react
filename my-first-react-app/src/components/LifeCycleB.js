import React, { Component } from 'react'

class LifeCycleB extends Component {

    constructor(props) {
        super(props)
        console.log("LifeCycleB : constructor");
        this.state = {
             
        }
    }

    static getDerivedStateFromProps(props,state){
        console.log("LifeCycleB : getDerivedStateFromProps");
        return null;
    }
    
   


    render() {
        console.log("LifeCycleB : render");
        return (
            <div>
                LifeCycleB
            </div>
        )
    }

    componentDidMount(){
        console.log("LifeCycleB : componentDidMount");
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("LifeCycleB : shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("LifeCycleB : getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate(){
        console.log("LifeCycleB : componentDidUpdate")
    }
    
}

export default LifeCycleB
