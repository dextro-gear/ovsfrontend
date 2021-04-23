import { event } from "jquery";
import React, { useState } from "react";
import DisplayVote from "./DisplayVote";

export default function CastNewVote() {
  const vote = {
    voterId: 101,
    candidateId: 111,
    candidateFirstName:"jhalak",
    candidateLastName:"gandhi",
    societyId: 121,
  };

  const voterIdRef = React.createRef();
  const candidateIdRef = React.createRef();
  const candidateFirstNameRef =React.createRef();
  const candidateLastNameRef =React.createRef();
  const societyIdRef = React.createRef();

  const initialState = {
    voterId: undefined,
    candidateId: undefined,
    societyId: undefined,
    candidateFirstName:undefined,
    candidateLastName:undefined,
    formStatus: "",
  };

  const response = { newVote: undefined, errMsg: undefined };

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
    <div className="container">
      <form onSubmit={(event) => submitHandler(event)}>
        <div className="form-group">
          <label>Enter voterId </label>
          <input
            className="form-control"
            name="voterId"
            ref={voterIdRef}
            onChange={() => changeHandler(voterIdRef)}
          />
        </div>
        <div>
          <label>Enter candidateId </label>
          <input
            className="form-control"
            name="candidateId"
            ref={candidateIdRef}
            onChange={() => changeHandler(candidateIdRef)}
          />
        </div>
        <div>
          <label>Enter candidateFirstName </label>
          <input
            className="form-control"
            name="candidateFirstName"
            ref={candidateFirstNameRef}
            onChange={() => changeHandler(candidateFirstNameRef)}
          />
        </div>
        <div>
          <label>Enter candidateLastName </label>
          <input
            className="form-control"
            name="candidateLastName"
            ref={candidateLastNameRef}
            onChange={() => changeHandler(candidateLastNameRef)}
          />
        </div>
        <div>
          <label>Enter societyId </label>
          <input
            className="form-control"
            name="societyId"
            ref={societyIdRef}
            onChange={() => changeHandler(societyIdRef)}
          />
          <br />
          <button type="submit">Cast new vote</button>
        </div>
      </form>

      <h2>{state.formStatus}</h2>

      {response.newVote ? (
        <div>
          <h2>New vote added successfully</h2>
          <DisplayVote vote={response.newVote} />
        </div>
      ) : (
        ""
      )}
      {response.errMsg ? (
        <p>
          Request was not successfull
          <br />
          {response.errMsg}
        </p>
      ) : (
        ""
      )}
    </div>
  );
}
