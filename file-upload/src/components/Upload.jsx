import React, { Component } from "react";
import axios from "axios";

class Upload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFile: null
    };
  }

  onChangeHandler = event => {
    //console.log(event.target.files[0]);
    this.setState({
      selectedFile: event.target.files[0]
    });
  };

  onClickHandler = () => {
    console.log(this.state.selectedFile);
    const data = new FormData();
    data.append("file", this.state.selectedFile);

    axios.post("http://localhost:8081/upload", data, {}).then(res => {
      // then print response status
      console.log(res.data);
    });
  };

  render() {
    return (
      <div className="col-md-3">
        <form method="post" action="#" id="#">
          <div className="form-group files">
            <label>Upload Your File </label>
            <input
              type="file"
              className="form-control"
              name="file"
              onChange={this.onChangeHandler}
            ></input>
            <button
              type="button"
              className="btn btn-success btn-block"
              onClick={this.onClickHandler}
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Upload;
