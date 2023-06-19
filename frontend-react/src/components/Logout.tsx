import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import Cookies from "universal-cookie";

export const Logout = () => {
  new Cookies().remove("token");
  return (
    <div>
      <header className="App-header">
        <nav>
          <NavLink to="/login">Login</NavLink>
        </nav>
      </header>
      <main>
        <h3>Logged-off</h3>
      </main>
    </div>
  );
};
