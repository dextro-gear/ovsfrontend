import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark py-3 px-4">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Online Voting System
          </Link>
          <button
            className="navbar-toggler"
            data-bs-toggler="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  role="button"
                >
                  Register
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/register/society">
                      Register a Society
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/register/voter">
                      Register as Voter
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/register/candidate">
                      Register as Candidate
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  role="button"
                >
                  Vote Service
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/byVoterId">
                      Fetch vote details by voterID
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/castVote">
                      Cast a new vote
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  role="button"
                >
                  Society Service
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/society">
                      Society Homepage
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/addSociety">
                      Add a new Society
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/societyById">
                      Get Society by ID
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  role="button"
                >
                  Voter Service
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/addVoter">
                      Register as voter
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/voterById">
                      View Voter Details
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
