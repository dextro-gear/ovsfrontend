import { event } from "jquery";
import React, { useState } from "react";
import DisplayVote from "./DisplayVote";
import validationMessage from "./validationMessage";
import commonStyle from "./commonStyle.module.css";

export default function CastNewVote() {
  const mockVote = {
    voterId: 101,
    candidateId: 111,
    candidateFirstName: "jhalak",
    candidateLastName: "gandhi",
    societyId: 121,
  };

  const voterIdRef = React.createRef();
  const candidateIdRef = React.createRef();
  const candidateFirstNameRef = React.createRef();
  const candidateLastNameRef = React.createRef();
  const societyIdRef = React.createRef();

  const initialState = {
    voterId: undefined,
    candidateId: undefined,
    societyId: undefined,
    candidateFirstName: undefined,
    candidateLastName: undefined,
    formStatus: "",
    validations: {
      voterId: undefined,
      candidateId: undefined,
      societyId: undefined,
      candidateFirstName: undefined,
      candidateLastName: undefined,
    },
  };

  const response = { vote: undefined, errMsg: undefined };

  const [state, setNewState] = useState(initialState);

  const submitHandler = (event) => {
    event.preventDefault();
    setNewState({ ...state, formStatus: "form submitted successfully" });
  };

  const changeHandler = (ref) => {
    const fieldName = ref.current.name;
    const fieldValue = ref.current.value;
    let validationMsg;
    if (ref === voterIdRef) {
      validationMsg = validateVoterId(fieldValue);
    }
    if (ref === candidateIdRef) {
      validationMsg = validateCandidateId(fieldValue);
    }
    if (ref === candidateFirstNameRef) {
      validationMsg = validateCandidateFirstName(fieldValue);
    }

    if (ref === societyIdRef) {
      validationMsg = validateSocietyId(fieldValue);
    }
    const newValidations = { ...state.validations, [fieldName]: validationMsg };
    const newState = {
      ...state,
      [fieldName]: fieldValue,
      vote: undefined,
      errMsg: undefined,
      validations: newValidations,
    };

    setNewState(newState);
  };
  /*
validation method for voterId
*/
  const validateVoterId = (voterId) => {
    if (voterId.length < 0) {
      return validationMessage.idSmallerThanzero;
    }
    return undefined;
  };
  /*
validation method for candidateId
*/
  const validateCandidateId = (candidateId) => {
    if (candidateId.length < 0) {
      return validationMessage.idSmallerThanzero;
    }
    return undefined;
  };
  /*
validation method for candidate first name
*/
  const validateCandidateFirstName = (candidateFirstName) => {
    if (candidateFirstName.length < 0) {
      return validationMessage.nameSmallerthanLengthThree;
    }
    return undefined;
  };

  /*
validation method for societyId
*/
  const validateSocietyId = (societyId) => {
    if (societyId.length < 0) {
      return validationMessage.idSmallerThanzero;
    }
    return undefined;
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
        {state.validations.voterId ? (
          <div>
            <div className={commonStyle.error}>{state.validations.voterId}</div>
          </div>
        ) : (
          ""
        )}
        <div>
          <label>Enter candidateId </label>
          <input
            className="form-control"
            name="candidateId"
            ref={candidateIdRef}
            onChange={() => changeHandler(candidateIdRef)}
          />
        </div>
        {state.validations.candidateId ? (
          <div>
            <div className={commonStyle.error}>
              {state.validations.candidateId}
            </div>
          </div>
        ) : (
          ""
        )}
        <div>
          <label>Enter candidateFirstName </label>
          <input
            className="form-control"
            name="candidateFirstName"
            ref={candidateFirstNameRef}
            onChange={() => changeHandler(candidateFirstNameRef)}
          />
        </div>
        {state.validations.candidateFirstName ? (
          <div>
            <div className={commonStyle.error}>
              {state.validations.candidateFirstName}
            </div>
          </div>
        ) : (
          ""
        )}
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
          {state.validations.voterId ? (
            <div>
              <div className={commonStyle.error}>
                {state.validations.voterId}
              </div>
            </div>
          ) : (
            ""
          )}
          <br />
          <button type="submit">Cast new vote</button>
        </div>
      </form>

      <h2>{state.formStatus}</h2>

      {response.vote ? (
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
