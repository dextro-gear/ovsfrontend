import React, { Component } from 'react';
import {Link} from "react-router-dom";


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
                        <Link className="navbar-brand" href="/">Online Voting System</Link>
                    </div>
                </nav>
                <div className="container-fluid text-center px-4 py-5">
                    <h1 className="display-4">Welcome to the Online Voting System!</h1>
                </div>
                <div className="container text-center px-4 py-5">
                    <div className="container">
                    <Link className="btn btn-danger m-1 w-25 red-btn" id="one">
                        <i class="fas fa-fist-raised"></i> Register as a voter
                    </Link>
                        <Link to="/castVote" className="btn btn-warning m-1 w-25 orange-btn">Cast your vote</Link>
                    </div>
                    <div className="container d.flex justify-content-center">
                        <Link className="btn btn-success m-1 w-25 green-btn">Register a Society</Link>
                        <Link className="btn btn-dark m-1 w-25 blue-btn">View Election Results</Link>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default LandingPage;