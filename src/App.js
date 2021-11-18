import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar/navbar.component";
import HomepageComponent from "./components/Homepage/homepage.component";

function App() {
  return (
    <Router>
      <>
        <NavBar />
        <div className="App">
          <Switch>
            <Route exact path="/home" component={HomepageComponent} />
          </Switch>
        </div>
      </>
    </Router>
  );
}

export default App;
