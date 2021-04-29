import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import ResultCard from "./electionresult/ResultCard";

class ElectionResultPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      candidateID: null,
      isFormSubmitted: false,
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

    this.mockCandidate = {
      candidateID: 666,
      candidateName: "Raja",
      totalPolledVotes: 100,
      totalCandidateVotes: 60,
      candidatesVotesPercentage: 60.0,
      result: "Unannounced",
      societyName: "Madripoor",
    };

    this.mockCandidates = [
      {
        candidateID: 123,
        candidateName: "Raja",
        totalPolledVotes: 100,
        totalCandidateVotes: 60,
        candidatesVotesPercentage: 60.0,
        result: "Elected",
        societyName: "Madripoor",
      },
      {
        candidateID: 456,
        candidateName: "Sundaram",
        totalPolledVotes: 100,
        totalCandidateVotes: 30,
        candidatesVotesPercentage: 30.0,
        result: "Not Elected",
        societyName: "Madripoor",
      },
      {
        candidateID: 789,
        candidateName: "Abhishek",
        totalPolledVotes: 100,
        totalCandidateVotes: 10,
        candidatesVotesPercentage: 10.0,
        result: "Not Elected",
        societyName: "Madripoor",
      },
    ];
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.setState((prevState) => ({ ...prevState, isFormSubmitted: true }));
  }

  onChangeHandler(event) {
    const { name, value } = event.target;
    this.setState((prevState) => ({ ...prevState, [name]: value }));
  }

  render() {
    return (
      <div>
        {/* Navbar */}
        <Navbar />
        {/* Search Candidate section */}
        <div className="px-5 py-5">
          <h1 className="display-6">Search for result by candidate</h1>
          <div className="container-fluid px-0 mt-4">
            <div className="row row-cols-2 align-items-stretch">
              <div className="col col-3">
                <form className="form-floating" onSubmit={this.onFormSubmit}>
                  <input
                    type="number"
                    className="form-control"
                    name="candidateID"
                    id="candidateID"
                    onChange={this.onChangeHandler}
                    min="1"
                  />
                  <label htmlFor="candidateID">Candidate ID</label>
                  <button
                    type="submit"
                    className="btn btn-secondary mt-3 w-100"
                  >
                    Fetch current result
                  </button>
                </form>
              </div>
              {this.state.isFormSubmitted ? (
                <ResultCard candidate={this.mockCandidate} />
              ) : null}
            </div>
          </div>
        </div>
        {/* Current winner section */}
        <div className="px-5 py-5">
          <h1 className="display-6">Current Winning Candidate</h1>
          <div className="container-fluid px-0 mt-4">
            <div className="row w-25">
              <ResultCard candidate={this.mockCandidate} />
            </div>
          </div>
        </div>
        {/* Election Result Section */}
        <div className="px-5 py-5">
          <h1 className="display-6 d.inline">Election Results</h1>
          <button className="btn btn-secondary mt-2">
            Get Election Results
          </button>

          <div className="row mt-4">
            {this.mockCandidates.map((candidate) => (
              <ResultCard candidate={candidate} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ElectionResultPage;
