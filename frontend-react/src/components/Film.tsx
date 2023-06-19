import React, { useState } from "react";
import "../App.css";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

export function Film() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [ticketPrice, setTicketPrice] = useState("");
  const [country, setCountry] = useState("");
  const [genre, setGenre] = useState("");
  const [photo, setPhoto] = useState("");
  const [rating, setRating] = useState("");
  const navigate = useNavigate();

  const handleSubmit: React.FormEventHandler = async (
    e: React.FormEvent<HTMLInputElement>,
  ) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/api/film/add", {
        name,
        description,
        releaseDate,
        ticketPrice,
        country,
        genre,
        rating,
      });
      navigate("/films");
    } catch (e) {}
  };

  return (
    <>
      <div>
        <header className="App-header">
          <nav>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/films">Films</NavLink>
            <NavLink to="/logout">Logout</NavLink>
          </nav>
        </header>
        <main>
          <h2>Add Film</h2>
          <form className="login-wrapper" onSubmit={(e) => handleSubmit(e)}>
            <label>
              <p>Name</p>
              <input
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              <p>Description</p>
              <input
                type="text"
                name="description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
            <label>
              <p>Release Date</p>
              <input
                type="date"
                name="release_date"
                onChange={(e) => setReleaseDate(e.target.value)}
              />
            </label>
            <label>
              <p>Ticket Price</p>
              <input
                type="text"
                name="ticket_price"
                onChange={(e) => setTicketPrice(e.target.value)}
              />
            </label>
            <label>
              <p>Country</p>
              <input
                type="text"
                name="country"
                onChange={(e) => setCountry(e.target.value)}
              />
            </label>
            <label>
              <p>Genre</p>
              <input
                type="text"
                name="genre"
                onChange={(e) => setGenre(e.target.value)}
              />
            </label>
            <label>
              <p>Rating</p>
              <input
                type="number"
                name="rating"
                onChange={(e) => setRating(e.target.value)}
              />
            </label>
            <div>
              <button type="submit" onSubmit={(e) => handleSubmit(e)}>
                Submit
              </button>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}
