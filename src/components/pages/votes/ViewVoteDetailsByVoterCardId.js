import React, { useState } from "react";
import { searchByVoterCardId } from "../../services/VoteService";
import DisplayVote from "./DisplayVote";
import Navbar from "../../Navbar";


/**
 * Component to fetch vote details by passing a voterCard id through a form
 * Once the user clicks on submit button the vote details is displayed if the vote for that voterCardId exists, if it 
 * doesn't exist then error message is shown.
*/

export default function ViewVoteDetailsByVoterCardId() {
  const voterCardIdRef = React.createRef();

  const initialState = {
    voterCardID: undefined,
    vote: undefined,
    errMsg: undefined,
  };

  const [currentState, setNewState] = useState(initialState);

  const fetchVoteDetails = (event) => {
    event.preventDefault();
    const id = currentState.voterCardID;
    const promise = searchByVoterCardId(id);
    promise
      .then((response) =>
        setNewState({ ...currentState, vote: response.data, errMsg: undefined })
      )
      .catch((error) =>
        setNewState({ ...currentState, vote: undefined, errMsg: error.message })
      );
  };

  const changeHandler = () => {
    const idValue = voterCardIdRef.current.value;
    const newState = {
      ...currentState,
      voterCardID: idValue,
    };
    setNewState(newState);
  };

  return (
    <div>
      <Navbar />
      <h2>View vote details</h2>

      <form onSubmit={fetchVoteDetails}>
        <div className="form-group">
          <label> Enter VoterCardId</label>
          <input
            name="id"
            type="text"
            ref={voterCardIdRef}
            onChange={() => changeHandler(voterCardIdRef)}
          />
        </div>
        <button type="submit">Get vote details</button>
        <button type="reset">reset</button>
      </form>
      <h5> Get vote details</h5>

      {currentState.vote ? (
        <div>
          <DisplayVote vote={currentState.vote} />
        </div>
      ) : (
        ""
      )}
      {currentState.errMsg ? (
        <div>
          Request Unsuccessful
          <br />
          {currentState.errMsg}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
