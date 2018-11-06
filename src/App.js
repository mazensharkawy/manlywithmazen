import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import routes from "./routes";
import Dashboard from "./containers/Dashboard";
import "tachyons";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard routes={routes} logo="Manly with Mazen" />;
      </div>
    );
  }
}

export default App;
