import React, { PureComponent} from "react";
import "./App.css";
import { hot } from "react-hot-loader";

class App extends PureComponent{
  render(){
    return(
      <div className="App">
        <h1> Hello! </h1>
      </div>
    );
  }
}

export default hot(module)(App);