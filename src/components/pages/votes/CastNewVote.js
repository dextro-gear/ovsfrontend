import { error, event } from "jquery";
import React, { useState } from "react";
import DisplayVote from "./DisplayVote";
import validationMessage from "./validationMessage";
import commonStyle from "./commonStyle.module.css";
import Navbar from "../../Navbar";
import { addNewVote } from "../../services/VoteService";

/**
 *
 * Cast new vote  Component this component is casting a new vote
 * by entering the required  data in form
 */
export default function CastNewVote() {
  const voterCardIdRef = React.createRef();
  const candidateIdRef = React.createRef();

  const societyIdRef = React.createRef();

  const initialState = {
    voterCardID: undefined,
    candidateID: undefined,
    societyID: undefined,
    vote: undefined,
    errMsg: undefined,

    formStatus: "",
    validations: {
      voterCardID: undefined,
      candidateID: undefined,
      societyID: undefined,
    },
  };

  const [state, setNewState] = useState(initialState);
  /**
   *
   * submit Handler Function
   */
  const submitHandler = (event) => {
    event.preventDefault();
    setNewState({ ...state, formStatus: "form submitted successfully" });
    if (
      state.validations.voterCardID ||
      state.validations.candidateID ||
      state.validations.societyID
    ) {
      return;
    }

    let data = { ...state };
    const promise = addNewVote(data);
    promise
      .then((response) => setNewState({ ...state, vote: response.data }))
      .catch((error) => setNewState({ ...state, errMsg: error.message }));
  };
  /**
   *
   * change Handler Function
   */
  const changeHandler = (ref) => {
    const fieldName = ref.current.name;
    const fieldValue = ref.current.value;
    let validationMsg;
    if (ref === voterCardIdRef) {
      validationMsg = validateVoterCardId(fieldValue);
    }
    if (ref === candidateIdRef) {
      validationMsg = validateCandidateId(fieldValue);
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
validation method for voterCardId
*/
  const validateVoterCardId = (voterCardId) => {
    if (voterCardId < 0) {
      return validationMessage.idSmallerThanzero;
    }
    return undefined;
  };
  /*
validation method for candidateId
*/
  const validateCandidateId = (candidateID) => {
    if (candidateID < 0) {
      return validationMessage.idSmallerThanzero;
    }
    return undefined;
  };

  /*
validation method for societyId
*/
  const validateSocietyId = (societyID) => {
    if (societyID < 0) {
      return validationMessage.idSmallerThanzero;
    }
    return undefined;
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <form onSubmit={(event) => submitHandler(event)}>
          <div className="form-group">
            <label>Enter voterCardId </label>
            <input
              className="form-control"
              name="voterCardID"
              ref={voterCardIdRef}
              onChange={() => changeHandler(voterCardIdRef)}
              required
            />
          </div>
          {state.validations.voterId ? (
            <div className={commonStyle.error}>{state.validations.voterId}</div>
          ) : (
            ""
          )}
          <div>
            <label>Enter candidateId </label>
            <input
              className="form-control"
              name="candidateID"
              ref={candidateIdRef}
              onChange={() => changeHandler(candidateIdRef)}
              required
            />
          </div>
          {state.validations.candidateId ? (
            <div className={commonStyle.error}>
              {state.validations.candidateId}
            </div>
          ) : (
            ""
          )}

          <div>
            <label>Enter societyId </label>
            <input
              className="form-control"
              name="societyID"
              ref={societyIdRef}
              onChange={() => changeHandler(societyIdRef)}
              required
            />
            {state.validations.voterId ? (
              <div className={commonStyle.error}>
                {state.validations.voterId}
              </div>
            ) : (
              ""
            )}
            <br />
            <button type="submit">Cast new vote</button>
          </div>
        </form>

        <h2>{state.formStatus}</h2>

        {state.vote ? (
          <div>
            <h2>New vote added successfully</h2>
            <DisplayVote vote={state.vote} />
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
    </div>
  );
}
