import React, { useEffect, useState } from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import axios, { AxiosResponse } from "axios";

export function Films() {
  const [films, setFilms] = useState<any[]>([]);
  const columns = [
    "Id",
    "Name",
    "Release Date",
    "Ticket Price",
    "Country",
    "Genre",
    "Rating",
  ];
  useEffect(() => {
    axios.get("http://localhost:3001/api/film/all").then((_: AxiosResponse) => {
      setFilms(_.data);
    });
  }, []);

  return (
    <div>
      <header className="App-header">
        <nav>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/film">Film</NavLink>
          <NavLink to="/logout">Logout</NavLink>
        </nav>
      </header>
      <main>
        <h3>Films List</h3>
        <table >
          <thead>
            <tr>
              {columns.map((col, i) => (
                <th key={i}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {films.map((film, i) => (
              <tr key={i}>
                 <td>{film["id"]}</td>
                <td>{film["name"]}</td>
                <td>{film["releaseDate"]}</td>
                <td>{film["ticketPrice"]}</td>
                <td>{film["country"]}</td>
                <td>{film["genre"]}</td>
                <td>{film["rating"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
