//@ts-nocheck
import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "../screens/Home.tsx";
import About from "../screens/About2.tsx";
import TermsAndConditions from "../screens/TermsAndConditions.tsx";

function Navbar() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link active">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about/1" className="nav-link active">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about/10" className="nav-link active">About10</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/terms-and-conditions" className="nav-link active">Terms and Conditions</NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/:id" element={<About />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
    </Router>
  );
}

export default Navbar;
