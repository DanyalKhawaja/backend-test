import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Users } from "./components/Users";
import { Film } from "./components/Film";
import { Films } from "./components/Films";
import { Logout } from "./components/Logout";
import { Signup } from "./components/Signup";
// import { PrivateRoutes } from "./components/PrivateRoutes";
import { Login } from "./components/Login";
import { Home } from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* <Route element={<PrivateRoutes />}> */}
            <Route path="/home" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/film" element={<Film />} />
            <Route path="/films" element={<Films />} />
            <Route path="/logout" element={<Logout />} />
            {/* </Route> */}
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
