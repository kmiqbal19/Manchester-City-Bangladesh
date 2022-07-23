import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar/navbar.component";
import HomepageComponent from "./components/Homepage/homepage.component";
import GalleryPage from "./components/GalleryPage/gallerypage.component";
import MembersPage from "./components/MembersPage/members.component";
import JoinPage from "./components/JoinPage/join.component";
function App() {
  return (
    <Router>
      <>
        <NavBar />
        <div>
          <Switch>
            <Route exact path="/" component={HomepageComponent} />
            <Route exact path="/home" component={HomepageComponent} />
            <Route exact path="/gallery" component={GalleryPage} />
            <Route exact path="/members" component={MembersPage} />
            <Route exact path="/join" component={JoinPage} />
          </Switch>
        </div>
      </>
    </Router>
  );
}

export default App;
