import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import About from "./components/html";
import Clynx from "./components/clynx";


function App() {
  const reload = () => window.location.reload();

  return (
    <Router>
      <div className="">
        <header className="App-header">
          <Switch>
            <Route
              path="/terms" render={() => <Redirect
                to={{
                  pathname: "./about.html"
                }}
              />} 
            />{" "}
            <Route exact path="/clynx" component={Clynx} />
            <Route exact path="/google" component={About} />
          </Switch>{" "}
        </header>
      </div>
    </Router>
  );
}

export default App;
