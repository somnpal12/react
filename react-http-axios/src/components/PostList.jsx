import React, { Component } from "react";
import Axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMessage: null
    };
  }

  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(result => {
        console.log(result);
        this.setState({
          posts: result.data
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          errorMessage: "Error Retreiving data"
        });
      });
  }

  render() {
    const { posts, errorMessage } = this.state;
    return (
      <div>
        List of Post
        {posts.length ? posts.map(e => <div id={e.id}>{e.title}</div>) : null}
        {errorMessage ? <div className="warning"> {errorMessage}</div> : null}
      </div>
    );
  }
}

export default PostList;
