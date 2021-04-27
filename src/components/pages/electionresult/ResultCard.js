import React, { Component } from "react";

class ResultCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-md">
        <div className="card">
          <div
            className={
              this.props.candidate.result === "Elected"
                ? "card-header text-white bg-success"
                : this.props.candidate.result === "Unannounced"
                ? "card-header text-black bg-warning"
                : "card-header text-white bg-danger"
            }
          >
            {this.props.candidate.result}
          </div>
          <div className="card-body">
            <h5 className="card-title display-6 fs-3">
              {this.props.candidate.candidateName}
            </h5>
            <p className="card-text">
              Candidate ID: {this.props.candidate.candidateID}
              <br />
              Total Polled Votes: {this.props.candidate.totalPolledVotes}
              <br />
              Votes Obtained: {this.props.candidate.totalCandidateVotes}
              <br />
              Voting Percentage:{" "}
              {this.props.candidate.candidatesVotesPercentage}%
              <br />
              Society: {this.props.candidate.societyName}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ResultCard;
