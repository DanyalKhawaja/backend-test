import React, { useEffect, useState } from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import axios, { AxiosResponse } from "axios";

export const Users = () => {
  const [users, setUsers] = useState<any[]>([]);
  const columns = ["Id", "Name", "Email"];
  useEffect(() => {
    axios.get("http://localhost:3001/api/user/all").then((_: AxiosResponse) => {
      setUsers(_.data);
    });
  }, []);
  return (
    <div>
      <header className="App-header">
        <nav>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/logout">Logout</NavLink>
        </nav>
      </header>
      <main>
        <h2>Users List</h2>
        <table>
          <thead>
            <tr>
              {columns.map((col, i) => (
                <th key={i}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={i}>
                <td>{user["id"]}</td>
                <td>{user["name"]}</td>
                <td>{user["email"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};
