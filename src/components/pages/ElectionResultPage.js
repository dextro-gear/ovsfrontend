import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import {
  getCurrentWinningCandidate,
  getElectionResult,
  getResultByCandidateID,
} from "../services/ElectionResultService";
import ResultCard from "./electionresult/ResultCard";

class ElectionResultPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      candidateID: null,
      isFormSubmitted: false,
      fetchedResult: null,
      currentResult: null,
      electionResult: null,
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.fetchCurrentWinner = this.fetchCurrentWinner.bind(this);
    this.fetchElectionResults = this.fetchElectionResults.bind(this);

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
    let fetchedResult = getResultByCandidateID(this.state.candidateID);
    fetchedResult
      .then((response) => {
        console.log(response.data);
        this.setState((prevState) => ({
          ...prevState,
          fetchedResult: response.data,
        }));
      })
      .catch((error) => {
        console.log(error.response.data);
      });
    // console.log(fetchedResult);
  }

  onChangeHandler(event) {
    const { name, value } = event.target;
    this.setState((prevState) => ({ ...prevState, [name]: value }));
  }

  fetchCurrentWinner() {
    let fetchedResult = getCurrentWinningCandidate();
    fetchedResult.then((response) => {
      console.log(response.data);
      this.setState((prevState) => ({
        ...prevState,
        currentResult: response.data,
      }));
    });
  }

  fetchElectionResults() {
    let fetchedResult = getElectionResult();
    fetchedResult.then((response) => {
      console.log(response.data);
      this.setState((prevState) => ({
        ...prevState,
        electionResult: response.data,
      }));
    });
  }

  render() {
    return (
      <div>
        {/* Navbar */}
        <Navbar />
        {/* Current winner section */}
        <div className="px-5 py-5">
          <div className="d-flex align-items-center">
            <span className="display-6">Current Winning Candidate</span>
            <button
              onClick={this.fetchCurrentWinner}
              type="button"
              className="btn btn-secondary mx-5 px-4 mt-2"
            >
              Fetch result
            </button>
          </div>
          <div className="container-fluid px-0 mt-4">
            <div className="row w-25">
              {this.state.currentResult ? (
                <ResultCard candidate={this.state.currentResult} />
              ) : null}
            </div>
          </div>
        </div>

        {/* Election Result Section */}
        <div className="px-5 py-5">
          <div className="d-flex align-item-center">
            <span className="display-6">Election Results</span>
            <button
              onClick={this.fetchElectionResults}
              className="btn btn-secondary mx-5 mt-2"
            >
              Get Election Results
            </button>
          </div>

          <div className="row mt-4 row-cols-3">
            {this.state.electionResult
              ? this.state.electionResult.map((candidate, index) => (
                  <ResultCard key={index} candidate={candidate} />
                ))
              : null}
          </div>
        </div>

        {/* Candidate-wise result section */}
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
                    Fetch result
                  </button>
                </form>
              </div>
              {this.state.isFormSubmitted ? (
                <ResultCard
                  candidate={
                    this.state.fetchedResult
                      ? this.state.fetchedResult
                      : this.mockCandidate
                  }
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ElectionResultPage;
