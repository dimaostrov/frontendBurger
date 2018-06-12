import React, { Component } from "react";
import "./App.css";

import Burgers from "./Burgers";


class App extends Component {

  render() {
    return (
        <div className="App bg-1 h-auto">
          <div className="bg-2 h5 mt5 pt4">
            <div className="f2 white bg-5 w5 shadow-1 pa2 center ma4">
              Burgers
            </div>
          </div>
          <Burgers />
        </div>
    );
  }
}

export default App;
