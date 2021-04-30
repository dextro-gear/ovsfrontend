import React, { useState } from "react";
import DisplaySociety from "./DisplaySociety";
import { event } from "jquery";
import { addSociety } from "../../services/SocietyService";
import Navbar from "../../Navbar";
import commonStyle from "./commonStyle.module.css";
import validationMessage from "./ValidationMessage";

export default function AddSociety() {
 
/**
 * creating references for field
 */
  const societyNameRef = React.createRef();
  const headOfSocietyRef = React.createRef();
  const villageRef = React.createRef();
  const mandalRef = React.createRef();
  const districtRef = React.createRef();
  const pincodeRef = React.createRef();
/**
 * stating initial state of feilds
 */
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

    validations:{
      pincode:undefined
    },
  };

  const [currentState, setNewState] = useState(initialState);



  const submitHandler = (event) => {
    event.preventDefault();

    setNewState({...currentState, formStatus:true});

    if(
      currentState.validations.pincode
    ){
       return;
    }
    
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
    let validationMsg;
    if (ref === pincodeRef){
      validationMsg= validatePincode(fieldValue);
    };

    const newValidation = {...currentState.validations,[fieldName]: validationMsg};
    const newState = {
      ...currentState,
      [fieldName]: fieldValue,
      newSociety: undefined,
      errMsg: undefined,
      validations:newValidation,
    };


    setNewState(newState);
  };

  /**
   * validation for pincode
   */

   const validatePincode = (pincode) => {
    if ( pincode<1 || pincode.length < 6) {
      return validationMessage.pincodeSixDigits;
    }
    return undefined;
  };

  return (
    <div>
      <Navbar/>
      <div className="container">
      <h3><i>Add new Society</i></h3>
      <div className = "container">
      <form class="needs-validation container container-sm border"  onSubmit={(event) => submitHandler(event)}>
        <div className="col-md-8">
          <label htmlFor="title" className="form-label">
            <h5>Society Name </h5>
          </label>
          <input
            type="text"
            className="form-control"
            name="societyName"
            ref={societyNameRef}
            onChange={() => changeHandler(societyNameRef)}
            required
          />
        </div>

        <div className="col-md-8">
          <label htmlFor="title" className="form-label">
            <h5>Head of Society</h5>
          </label>
          <input
            type="text"
            className="form-control "
            name="headOfSociety"
            ref={headOfSocietyRef}
            onChange={() => changeHandler(headOfSocietyRef)}
            required
          />

          <div className="col-md-8">
            <label htmlFor="validationServer02" className="form-label">
              <h5>Village</h5>
            </label>
            <input
              type="text"
              className="form-control"
              name="village"
              ref={villageRef}
              onChange={() => changeHandler(villageRef)}
              required
            />
          </div>

          <div className="col-md-8">
            <label htmlFor="title" className="form-label">
              <h5>Mandal</h5>
            </label>
            <input
              type="text"
              className="form-control"
              name="mandal"
              ref={mandalRef}
              onChange={() => changeHandler(mandalRef)}
              required
            />
          </div>

          <div className="col-md-8">
            <label htmlFor="title" className="form-label">
              <h5>District</h5>
            </label>
            <input
              type="text"
              className="form-control"
              name="district"
              ref={districtRef}
              onChange={() => changeHandler(districtRef)}
              required
            />
          </div>

          <div className="col-md-8">
            <label htmlFor="title" className="form-label">
              <h5>Pincode</h5>
            </label>
            <input
              type="text"
              className="form-control"
              name="pincode"
              ref={pincodeRef}
              onChange={() => changeHandler(pincodeRef)}
              required
            />
          </div>
          {currentState.validations.pincode ?(
            <div className={commonStyle.error}>
              {currentState.validations.pincode}
            </div>
          ):("")}
          <br />
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button
              className="btn btn-success me-md-2 btn-border-radius-lg"
              type="submit"
            >
              <h3>Submit !</h3>
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
    </div>
    </div>
  );
}
