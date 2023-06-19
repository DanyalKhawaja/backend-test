import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import { NavLink, Navigate } from "react-router-dom";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit: React.FormEventHandler = async (
    e: React.FormEvent<HTMLInputElement>,
  ) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/api/user/register", {
        name,
        email,
        password,
      });
      setSuccess(true);
    } catch (e: any) {
    }
  };

  return (
    <>
      {success ? (
        <Navigate to="/login" replace={true} />
      ) : (
        <div>
          <header className="App-header">
            <nav>
              <NavLink to="/login">Login</NavLink>
            </nav>
          </header>
          <main>
            <h2>Please Signup</h2>
            <form className="login-wrapper" onSubmit={handleSubmit}>
              <label>
                <p>name</p>
                <input type="text" onChange={(e) => setName(e.target.value)} />
              </label>
              <label>
                <p>Email</p>
                <input type="text" onChange={(e) => setEmail(e.target.value)} />
              </label>
              <label>
                <p>Password</p>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </main>
        </div>
      )}
    </>
  );
};
