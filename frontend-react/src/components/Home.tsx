import React, { useState } from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

export const Home = () => {
  const [result, setResult] = useState<Record<string, any>[]>([]);
  const [field, setField] = useState("name");

  const changeHandler: React.ChangeEventHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    e.preventDefault();
    if (e.target.value.length == 0) return;
    try {
      axios
        .get("http://localhost:3001/api/film/search", {
          params: { text: e.target.value, field },
        })
        .then(
          ({
            data: {
              hits: { hits },
            },
          }) => setResult(hits),
        );
    } catch (e) {}
  };

  return (
    <div className="App-body">
      <header className="App-header">
        <nav>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/films">Films</NavLink>
          <NavLink to="/logout">Logout</NavLink>
        </nav>
      </header>
      <main>
        <h2>Welcome to Backend Test</h2>
        <label>
          <p>Search</p>
          <input type="text" name="search" onChange={changeHandler} />
          <p>
            <label>Field</label>
            <select
              name="field"
              id="field"
              onChange={(e) => {
                setField(e.target.value);
                setResult([]);
              }}
            >
              <option value="name">Name</option>
              <option value="description">Description</option>
              <option value="genre">Genre</option>
            </select>
          </p>
        </label>
        <div className="results">
          {result.map((row) => (
            <p>{row._source.name}</p>
          ))}
        </div>
      </main>
    </div>
  );
};
