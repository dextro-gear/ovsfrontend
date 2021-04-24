import React, { useState } from "react";
import DisplayVote from "./DisplayVote";

export default function GetVoteByVoterId({ id }) {
  const mockVote = {
    voterId: 101,
    candidateId: 111,
    candidateFirstName: "jhalak",
    candidateLastName: "gandhi",
    societyId: 121,
  };

  const response = { vote: mockVote, errMsg: undefined };

  return (
    <div>
      <h4>Get vote by voterId</h4>
      {response.vote ? (
        <div>
          <h2>Vote details</h2>
          <DisplayVote vote={response.vote} />
        </div>
      ) : (
        ""
      )}

      {response.errMsg ? (
        <div className="commonStyle.error">
          Request was not successful
          <br />
          {response.errMsg}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
