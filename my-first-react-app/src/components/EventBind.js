import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props){
        super(props)

        this.state ={
            message : "hello"
        }

        // this.clickHandler = this.clickHandler.bind(this)

    }


    //   clickHandler(){
    //     this.setState({
    //         message : "Re Hello !"
    //     })
    //   } 

     clickHandler = () => {
          this.setState({
             message : "Good Bye !"
        })
     }

    render() {
        return (
            <div>
              <div>{this.state.message}</div>  
              {/* <div><button onClick={this.clickHandler.bind(this)}>Click</button></div>   */}
              {/* <div><button onClick={() => this.clickHandler()}>Click</button></div>   */}
              <div><button onClick={this.clickHandler}>Click</button></div>
            </div>
        )
    }
}

export default EventBind
