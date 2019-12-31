import React, { Component } from "react";

import "./App.css";

import ComponentA from "./components/40_Context/ComponentA";
import { UserProvider } from "./components/40_Context/userContext";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <UserProvider value="Spiderman">
          <ComponentA></ComponentA>
        </UserProvider>
      </div>
    );
  }
}
