import React, { useEffect, useState } from "react";
import { searchByVoterId } from "../../services/VoteService";
import DisplayVote from "./DisplayVote";

export default function ViewVoteDetailsByVoterId(props) {
  const voterIdRef = React.createRef();

  const initialState = {
    voterId: undefined,
    vote: undefined,
    errMsg: undefined,
  };

  const [currentState, setNewState] = useState(initialState);

  /* const submitHandler = (event) => {
    event.preventDefault();
    console.log("current state is:", currentState);

    
  };
*/
  const fetchVoteDetails = (event) => {
    event.preventDefault();
    const id = currentState.voterId;
    const promise = searchByVoterId(id);
    promise
      .then((response) =>
        setNewState({ ...currentState, vote: response.data, errMsg: undefined })
      )
      .catch((error) =>
        setNewState({ ...currentState, vote: undefined, errMsg: error.message })
      );
  };
 
 // useEffect(fetchVoteDetailsOnRender);
 
  const changeHandler = () => {
    //const fieldName = ref.current.name;
    //const fieldValue = ref.current.value;
    //const newState = { ...currentState, [fieldName]: fieldValue };
    //setNewState(newState);
    const idValue = voterIdRef.current.value;
    const newState = {
      ...currentState,
      voterId: idValue,
      //vote: undefined,
      //errMsg: undefined,
    };
    setNewState(newState);
  };

  return (
    <div>

<h2>View vote details</h2>
      <form onSubmit={fetchVoteDetails}>
        <div className="form-group">
          <label> Enter VoterId</label>
          <input
            name="id"
            type="number"
            ref={voterIdRef}
            onChange={() => changeHandler(voterIdRef)}
          />
        </div>
        <button type="submit">Get vote details</button>
        <button type="reset">reset</button>
        </form>
      <h1> Get vote details</h1>

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
