import React, { Component } from "react";

import "./App.css";
import PortalDemo from "./components/31_portals/PortalDemo";
import Hero from "./components/32_error_boundary/Hero";
import ErrorBoundary from "./components/32_error_boundary/ErrorBoundary";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <PortalDemo></PortalDemo> */}
        <ErrorBoundary>
          <Hero heroname="Ironman" />{" "}
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroname="Spiderman" />{" "}
        </ErrorBoundary>
        <ErrorBoundary>
          {" "}
          <Hero heroname="Joker" />
        </ErrorBoundary>
      </div>
    );
  }
}
