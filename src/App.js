import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Google from "./components/google";
import Clynx from "./components/clynx";

function App() {
  return (
    <Router>
      <div className="">
        <header className="App-header">
          <Switch>
            <Route exact path="/clynx" component={Clynx} />
            <Route exact path="/google" component={Google} />
          </Switch>{" "}
        </header>
      </div>
    </Router>
  );
}

export default App;
