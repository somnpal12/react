import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import Axios from "axios";

export class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: ""
    };
  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: [event.target.value]
    });
  };

  submitHandler = event => {
    event.preventDefault();
    console.log(this.state);
    Axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  };

  resetHandler = () => {
    this.setState({
      userId: "",
      title: "",
      body: ""
    });
  };

  render() {
    const { userId, title, body } = this.state;
    return (
      <div>
        <Form onSubmit={this.submitHandler}>
          <div>
            <input
              type="text"
              name="userId"
              value={userId}
              onChange={this.changeHandler}
            ></input>
          </div>
          <div>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.changeHandler}
            ></input>
          </div>
          <div>
            <input
              type="text"
              name="body"
              value={body}
              onChange={this.changeHandler}
            ></input>
          </div>
          <div>
            <Button type="submit"> Submit </Button>
            &nbsp;
            <Button type="reset" onClick={this.resetHandler}>
              Reset
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default PostForm;
