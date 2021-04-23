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

    const voterIDRef = React.createRef();
    const voterIDCardNoRef = React.createRef();
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
        voterId: undefined,
        voterIDCardNo: undefined,
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
          newVoter: undefined,
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
              ref={voterIDRef}
              onChange={() => changeHandler(voterIDRef)}
            />
          </div>
          <div>
            <label>Enter voterIDCard Number </label>
            <input
              name="voterIDCardNo"
              ref={voterIDCardNoRef}
              onChange={() => changeHandler(voterIDCardNoRef)}
            />
          </div>
          <div>
          <label>Enter firstName </label>
            <input
              name="firstName"
              ref={firstNameRef}
              onChange={() => changeHandler(firstNameRef)}
            />
          </div>
          <div>
            <label>Enter lastName </label>
            <input
              name="lastName"
              ref={lastNameRef}
              onChange={() => changeHandler(lastNameRef)}
            />
          </div>
          <div>
            <label>Enter gender </label>
            <select
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

          <div>
            <label>Enter password </label>
            <input
              name="password"
              ref={passwordRef}
              onChange={() => changeHandler(passwordRef)}
            />
          </div>
          <div>
            <label>Enter reservationCategory </label>
            <input
              name="reservationCategory"
              ref={reservationCategoryRef}
              onChange={() => changeHandler(reservationCategoryRef)}
            />
          </div>
          <div>
            <label>Enter mobileNo </label>
            <input
              name="mobileNo"
              ref={mobileNoRef}
              onChange={() => changeHandler(mobileNoRef)}
            />
          </div>
          <div>
            <label>Enter emailID </label>
            <input
              name="emailID"
              ref={emailIDRef}
              onChange={() => changeHandler(emailIDRef)}
            />
          </div>
          <div>
            <label>Enter address1 </label>
            <input
              name="address1"
              ref={address1Ref}
              onChange={() => changeHandler(address1Ref)}
            />
          </div>
          <div>
            <label>Enter address2 </label>
            <input
              name="address2"
              ref={address2Ref}
              onChange={() => changeHandler(address2Ref)}
            />
          </div>
          <div>
            <label>Enter mandal</label>
            <input
              name="mandal"
              ref={mandalRef}
              onChange={() => changeHandler(mandalRef)}
            />
          </div>
          <div>
            <label>Enter district </label>
            <input
              name="district"
              ref={districtRef}
              onChange={() => changeHandler(districtRef)}
            />
          </div>
          <div>
            <label>Enter pincode </label>
            <input
              name="pincode"
              ref={pincodeRef}
              onChange={() => changeHandler(pincodeRef)}
            />
          </div>
          <div>
            <label>Enter cooperativeSociety </label>
            <input
              name="cooperativeSociety"
              ref={cooperativeSocietyRef}
              onChange={() => changeHandler(cooperativeSocietyRef)}
            />
            <br />
            <button type="submit">Cast new vote</button>
          </div>
        </form>
        
        
        
        <h2>{state.formStatus}</h2>
        <h2>Voter Details</h2><br/>

        <p>voterId is :{state.voterId}</p>
        <br />
        <p>voterIDCardNo is :{state.voterIDCardNo}</p>
        <br />
        <p>firstName is :{state.firstName}</p>
        <br />
        <p>lastName is :{state.lastName}</p>
        <br />
        <p>gender is :{state.gender}</p>
        <br />
        <p>reservationCategory is :{state.reservationCategory}</p>
        <br />
        <p>mobileNo is :{state.mobileNo}</p>
        <br />
        <p>emailID is :{state.emailID}</p>
        <br />
        <p>address1 is :{state.address1}</p>
        <br />
        <p>address2 is :{state.address2}</p>
        <br />
        <p>mandal is :{state.mandal}</p>
        <br />
        <p>district is :{state.district}</p>
        <br />
        <p>pincode is :{state.pincode}</p>
        <br />
        <p>cooperativeSociety is :{state.cooperativeSociety}</p>
        
        {state.newVoter ? (
            <div>
                <h2>New voter added successfully</h2>
                <DisplayVoter voter={state.newVoter} />
            </div>
        ) : ("")}
        
        {state.errMsg ? (
            <div>
            <p>Request was not successful {state.errMsg} </p>
            </div>
        ) : ("")}
    </div>
        );
}