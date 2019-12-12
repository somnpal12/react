import React,{ Component } from 'react'

class Message extends Component
{
    render(){
        return (
            <div>
            <h3>Count : {this.state.count}</h3>
            <button onClick={() => this.incrementBy5()}>Subscribe</button>
            </div>
        )
    }

   constructor(props) {
       super(props)
   
       this.state = {
        message: 'Today is Monday',
        count : 0
       }
   }

   increment(){
      /*this.setState(
          {
           count: this.state.count + 1
          },() =>{
            console.log('count : ' , this.state.count);
          }
      ) */
      this.setState((previousState) => ({
          count: previousState.count + 1
      }))
   }    

   incrementBy5(){
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
   }
   
}

export default Message;