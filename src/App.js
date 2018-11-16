import React, { Component } from "react";

import Header from "./components/Header";
import Album from "./components/Album";
import Actions from "./components/Actions";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Album />
        <Actions />
      </div>
    );
  }
}

export default App;
