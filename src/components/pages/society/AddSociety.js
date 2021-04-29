import React, { useState } from "react";
import DisplaySociety from "./DisplaySociety";
import { event } from "jquery";
import { addSociety } from "../../../service/SocietyService";

export default function AddSociety() {
  // const society = {
  //   societyName :"anj",
  //   headOfSociety :"bhn",
  //   village :"njm",
  //   mandal :"sfgd",
  //   district:213,
  //   pincode:598,
  // };

  const societyNameRef = React.createRef();
  const headOfSocietyRef = React.createRef();
  const villageRef = React.createRef();
  const mandalRef = React.createRef();
  const districtRef = React.createRef();
  const pincodeRef = React.createRef();

  const initialState = {
    societyName: undefined,
    headOfSociety: undefined,
    village: undefined,
    mandal: undefined,
    district: undefined,
    pincode: undefined,
    errMsg: undefined,
    newSociety: undefined,
    formStatus: false,
  };

  const [currentState, setNewState] = useState(initialState);

  const submitHandler = (event) => {
    event.preventDefault();

    setNewState({...currentState, formStatus:true});
    


    let data = { ...currentState };
    const promise = addSociety(data);
    promise
    .then((request)=>
      setNewState({...currentState, newSociety : request.data})
      )
    .catch((error)=>
      setNewState({...currentState,errMsg:error.data})
      );
  };
     

  const changeHandler = (ref) => {
    const fieldName = ref.current.name;
    const fieldValue = ref.current.value;
    const newState = {
      ...currentState,
      [fieldName]: fieldValue,
      newSociety: undefined,
      errMsg: undefined,
    };
    setNewState(newState);
  };
  return (
    <div>
      <form onSubmit={(event) => submitHandler(event)}>
        <div className="col-md-4">
          <label htmlFor="title" className="form-label">
            Society Name
          </label>
          <input
            type="text"
            className="form-control"
            name="societyName"
            ref={societyNameRef}
            onChange={() => changeHandler(societyNameRef)}
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="title" className="form-label">
            Head of Society
          </label>
          <input
            type="text"
            className="form-control "
            name="headOfSociety"
            ref={headOfSocietyRef}
            onChange={() => changeHandler(headOfSocietyRef)}
          />

          <div className="col-md-8">
            <label htmlFor="validationServer02" className="form-label">
              Village
            </label>
            <input
              type="text"
              className="form-control"
              name="village"
              ref={villageRef}
              onChange={() => changeHandler(villageRef)}
            />
          </div>

          <div className="col-md-8">
            <label htmlFor="title" className="form-label">
              Mandal
            </label>
            <input
              type="text"
              className="form-control"
              name="mandal"
              ref={mandalRef}
              onChange={() => changeHandler(mandalRef)}
            />
          </div>

          <div className="col-md-8">
            <label htmlFor="title" className="form-label">
              District
            </label>
            <input
              type="text"
              className="form-control"
              name="district"
              ref={districtRef}
              onChange={() => changeHandler(districtRef)}
            />
          </div>

          <div className="col-md-8">
            <label htmlFor="title" className="form-label">
              Pincode
            </label>
            <input
              type="text"
              className="form-control"
              name="pincode"
              ref={pincodeRef}
              onChange={() => changeHandler(pincodeRef)}
            />
          </div>
          <br />
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button
              className="btn btn-success me-md-2 btn-border-radius-lg"
              type="submit"
            >
              Submit !
            </button>
          </div>
        </div>
      </form>

      <h2>{currentState.formStatus}</h2>

      {currentState.newSociety ? (
        <div>
          <h2>Society Added Successfully</h2>
          <DisplaySociety society={currentState.newSociety} />
        </div>
      ) : (
        ""
      )}

      {currentState.errMsg ? (
        <div>
          <h2>Request was not successful</h2>
          <br>{currentState.errMsg}</br>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
