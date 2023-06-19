import React, { useEffect, useState } from "react";
import "../App.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit: React.FormEventHandler = async (
    e: React.FormEvent<HTMLInputElement>,
  ) => {
    e.preventDefault();
    try {
      const token = await axios.post("http://localhost:3001/api/auth/login", {
        email,
        password,
      });
      new Cookies().set("token",token);
      navigate("/home");
    } catch (e) {
     
    }
  };

  return (
    <div>
      <header className="App-header">
        <nav>
          <NavLink to="/signup">Signup</NavLink>
        </nav>
      </header>
      <main>
        <h1>Please Log In</h1>
        <form className="login-wrapper" onSubmit={(e) => handleSubmit(e)}>
          <label>
            <p>Username</p>
            <input
              type="text"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <p>Password</p>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
            />
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </main>
    </div>
  );
};
