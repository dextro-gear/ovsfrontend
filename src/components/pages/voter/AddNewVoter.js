import React, { useState } from "react";
import DisplayVoter from "./DisplayVoter";

export default function AddNewVoter() {
   /* const voter = {
        voterId: "1",
        voterIDCardNo : "1A",
        firstName: "Ritik",
        lastName: "Singh",
        gender: "Male",
        password:"qwerty",
        reservationCategory:"A",
        mobileNo:"9589235478",
        emailID:"abc@gmail.com",
        address1:"house no.-1",
        address2: "Mathura",
        mandal: "xyz",
        district: "abc",
        pincode: "123456",
        cooperativeSociety: "1",
    };
    */

    const firstNameRef = React.createRef();
    const lastNameRef = React.createRef();
    const genderRef = React.createRef();
    const passwordRef = React.createRef();
    const reservationCategoryRef = React.createRef();
    const mobileNoRef = React.createRef();
    const emailIDRef = React.createRef();
    const address1Ref = React.createRef();
    const address2Ref = React.createRef();
    const mandalRef = React.createRef();
    const districtRef = React.createRef();
    const pincodeRef = React.createRef();
    const cooperativeSocietyRef = React.createRef();


    const initialState = {
        firstName: undefined,
        lastName: undefined,
        gender: undefined,
        password: undefined,
        reservationCategory: undefined,
        mobileNo: undefined,
        emailID: undefined,
        address1: undefined,
        address2: undefined,
        mandal: undefined,
        district: undefined,
        pincode: undefined,
        cooperativeSociety: undefined,
        newVoter: undefined,
        errMsg: undefined,
        formStatus: "",
      };

      const [currentState, setNewState] = useState(initialState);

      const response = { voter: undefined, errMsg: undefined };


      const submitHandler = (event) => {
        event.preventDefault();
        setNewState({ ...currentState, formStatus: "form submitted successfully" });
      };

      const changeHandler = (ref) => {
        const fieldName = ref.current.name;
        const fieldValue = ref.current.value;
        const newState = {
          ...currentState,
          [fieldName]: fieldValue,
          newVoter: undefined,
          errMsg: undefined,
        };

        setNewState(newState);
        };

    return (

        <div>
        <form onSubmit={(event) => submitHandler(event)}>
          <div className="form-group">
          <label>Enter firstName </label>
            <input
            className="form-control"
              name="firstName"
              ref={firstNameRef}
              onChange={() => changeHandler(firstNameRef)}
            />
          </div>
          <div className="form-group">
            <label>Enter lastName </label>
            <input
            className="form-control"
              name="lastName"
              ref={lastNameRef}
              onChange={() => changeHandler(lastNameRef)}
            />
          </div>
          <div className="form-group">
            <label>Enter gender </label>
            <select
                className="form-control"
                name="gender"
                type="text"
                ref={genderRef}
                onChange={() => changeHandler(genderRef)}>
                <option disabled selected>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
            </select>
          </div>

          <div className="form-group">
            <label>Enter password </label>
            <input
            className="form-control"
              name="password"
              ref={passwordRef}
              onChange={() => changeHandler(passwordRef)}
            />
          </div>
          <div className="form-group">
            <label>Enter reservationCategory </label>
            <input
              name="reservationCategory"
              ref={reservationCategoryRef}
              onChange={() => changeHandler(reservationCategoryRef)}
            />
          </div>
          <div  className="form-group">
            <label>Enter mobileNo </label>
            <input
            className="form-control"
              name="mobileNo"
              ref={mobileNoRef}
              onChange={() => changeHandler(mobileNoRef)}
            />
          </div>
          <div  className="form-group">
            <label>Enter emailID </label>
            <input
            className="form-control"
              name="emailID"
              ref={emailIDRef}
              onChange={() => changeHandler(emailIDRef)}
            />
          </div>
          <div className="form-group">
            <label>Enter address1 </label>
            <input
            className="form-control"
              name="address1"
              ref={address1Ref}
              onChange={() => changeHandler(address1Ref)}
            />
          </div>
          <div className="form-group">
            <label>Enter address2 </label>
            <input
            className="form-control"
              name="address2"
              ref={address2Ref}
              onChange={() => changeHandler(address2Ref)}
            />
          </div>
          <div className="form-group">
            <label>Enter mandal</label>
            <input
            className="form-control"
              name="mandal"
              ref={mandalRef}
              onChange={() => changeHandler(mandalRef)}
            />
          </div>
          <div className="form-group">
            <label>Enter district </label>
            <input
            className="form-control"
              name="district"
              ref={districtRef}
              onChange={() => changeHandler(districtRef)}
            />
          </div>
          <div className="form-group">
            <label>Enter pincode </label>
            <input
            className="form-control"
              name="pincode"
              ref={pincodeRef}
              onChange={() => changeHandler(pincodeRef)}
            />
          </div>
          <div className="form-group">
            <label>Enter cooperativeSociety </label>
            <input
            className="form-control"
              name="cooperativeSociety"
              ref={cooperativeSocietyRef}
              onChange={() => changeHandler(cooperativeSocietyRef)}
            />
            <br />
            <button type="submit">Register</button>
          </div>
        </form>
        
        
        
        <h2>{currentState.formStatus}</h2>
        
        {response.newVoter ? (
            <div>
                <h2>New voter added successfully</h2>
                <DisplayVoter voter={response.newVoter} />
            </div>
        ) : ("")}
        
        {response.errMsg ? (
            <div>
            <p>Request was not successful {response.errMsg} </p>
            </div>
        ) : ("")}
    </div>
        );
}