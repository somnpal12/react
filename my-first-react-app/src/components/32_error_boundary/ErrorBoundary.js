import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
    console.log("----------------------");
    console.log(info);
  }
  render() {
    if (this.state.hasError) {
      return <div className="error">Something is wrong</div>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
