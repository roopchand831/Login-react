import React from "react";
import "./Layout.css";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";

function Layout(props) {
  return (
    <BrowserRouter>
      <div className="Layout">
        <br></br>
        <nav className="navbar">
          <NavLink to="/register">Signup</NavLink>
          <NavLink to="/">Login</NavLink>
        </nav>

        <Switch>
          <Route path="/register" component={Signup} />
          <Route path="/" exact component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Layout;
