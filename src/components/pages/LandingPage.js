import React, { Component } from "react";
import { Link } from "react-router-dom";
import VoterNavbar from "./voter/VoterNavbar";

class LandingPage extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() { 
        let arrayfun = (num1, num2) => num1.length + num2 ;
        return (
            <div>
                <nav className="navbar navbar-dark navbar-expand-lg bg-dark py-3">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Online Voting System</Link>
                    </div>
                </nav>
                <div className="container-fluid text-center px-4 py-5">
                    <h1 className="display-4">Welcome to the Online Voting System!</h1>
                </div>
                <div className="container text-center px-4 py-5">
                    <div className="container">
                    <Link to="/VoterNavbar" className="btn btn-danger m-1 w-25 red-btn" id="one">
                        <i className="fas fa-fist-raised"></i> Register as a voter
                    </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;
