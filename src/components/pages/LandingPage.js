import React, { Component } from "react";
import { Link } from "react-router-dom";
import CastNewVote from "./votes/CastNewVote";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" href="/">
              Online Voting System
            </Link>
          </div>
        </nav>
        <div className="container-fluid text-center px-4 py-5">
          <h1 className="display-4">Welcome to the Online Voting System!</h1>
        </div>
      </div>
    );
  }
}

export default LandingPage;
