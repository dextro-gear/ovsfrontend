import { event } from "jquery";
import React, { useState } from "react";
import DisplayNewVote from "./DisplayNewVote";

export default function CastNewVote() {
  const vote = {
    voterId: "v101",
    candidateId: "c101",
    societyId: "s101",
  };

  const voterIdRef = React.createRef();
  const candidateIdRef = React.createRef();
  const societyIdRef = React.createRef();

  const initialState = {
    voterId: undefined,
    candidateId: undefined,
    societyId: undefined,
    newVote: undefined,
    errMsg: undefined,
    formStatus: "",
  };

  const [state, setNewState] = useState(initialState);

  const submitHandler = (event) => {
    event.preventDefault();
    setNewState({ ...state, formStatus: "form submitted successfully" });
  };

  const changeHandler = (ref) => {
    const fieldName = ref.current.name;
    const fieldValue = ref.current.value;
    const newState = {
      ...state,
      [fieldName]: fieldValue,
      newVote: undefined,
      errMsg: undefined,
    };

    setNewState(newState);
  };

  return (
    <div>
      <form onSubmit={(event) => submitHandler(event)}>
        <div>
          <label>Enter voterId </label>
          <input
            name="voterId"
            ref={voterIdRef}
            onChange={() => changeHandler(voterIdRef)}
          />
        </div>
        <div>
          <label>Enter candidateId </label>
          <input
            name="candidateId"
            ref={candidateIdRef}
            onChange={() => changeHandler(candidateIdRef)}
          />
        </div>
        <div>
          <label>Enter societyId </label>
          <input
            name="societyId"
            ref={societyIdRef}
            onChange={() => changeHandler(societyIdRef)}
          />
          <br />
          <button type="submit">Cast new vote</button>
        </div>
      </form>

      <h2>{state.formStatus}</h2>
      <h2>Details entered by user</h2>
      <p>voterId is :{state.voterId}</p>
      <br />
      <p>candidateId is :{state.candidateId}</p>
      <br />
      <p>societyId is :{state.societyId}</p>
      {state.newVote ? (
        <div>
          <h2>New vote added successfully</h2>
          <DisplayNewVote vote={state.newVote} />
        </div>
      ) : (
        ""
      )}
      {state.errMsg ? (
        <p>
          Request was not successfull
          <br />
          {state.errMsg}
        </p>
      ) : (
        ""
      )}
    </div>
  );
}
