import React, { Component } from 'react'

export class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comment: '',
            topic: 'vue'
        }
        
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleTopicChange = (event) =>{
        //console.log(event.target.value);
        console.table(event.target.value)
        this.setState({
            topic: event.target.value
        })
    }

    handleCommentChange = (event) => {
        this.setState({
            comment : event.target.value
        })
    }

    handleFormSubmit = (event) => {
        alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
        event.preventDefault()
    }

  

    render() {

        // destructure.
        const {username,comment,topic} = this.state
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div>
                    <label>Username :</label>
                    <input type="text"
                        value={username} 
                        onChange={this.handleUsernameChange} />
                </div>
                <p></p>
                <div>
                    <label>Comment :</label>
                    <textarea value={comment} onChange={this.handleCommentChange}></textarea>
                </div>
                <p></p>
                <div>
                    <label>Topic:</label>
                    <select value={topic} 
                        onChange={this.handleTopicChange}>
                        <option  value="angular">Angular</option>
                        <option  value="react">React</option>
                        <option  value="vue">Vue</option>
                    </select>
                </div>
                <button type="submit">submit</button>
            </form>

        )
    }
}

export default Form
