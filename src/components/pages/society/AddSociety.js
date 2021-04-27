import React, { useState } from "react";
import DisplaySociety from "./DisplaySociety";
import { event } from "jquery";


export default function AddSociety() {
  const society = {
    societyName :"anj",
    headOfSociety :"bhn",
    village :"njm",
    mandal :"sfgd",
    district:213,
    pincode:598,
  };


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
    newSociety:undefined,
    formStatus: "",
  };

  const [state, setState] = useState(initialState);

  const submitHandler = (event) => {
    event.preventDefault();
    setState({ ...state, formStatus: "Form Submitted Successfully" });
    setState({...state,newSociety:{societyName:state.societyName,headOfSociety:state.headOfSociety,village:state.village,mandal:state.mandal,district:state.district,pincode:state.pincode}})
  };

  const changeHandler = (ref) => {
    const fieldName = ref.current.name;
    const fieldValue = ref.current.value;
    const newState = {
      ...state,
      [fieldName]: fieldValue,
      newSociety:undefined,
      errMsg:undefined,
    };
    setState(newState);
  };
  return (
    <div>
      <form onSubmit={(event) => submitHandler(event)}>
        <div className="col-md-4">
          <label for="title" className="form-label">
            Society Name
          </label>
          <input
            type="text"
            className="form-control"
            name = "societyName"
            ref={societyNameRef}
            onChange={() => changeHandler(societyNameRef)}
          />
        </div>

        <div className="col-md-4">
          <label for="title" className="form-label">
            Head of Society
          </label>
          <input
            type="text"
            className="form-control "
            name = "headOfSociety"
            ref={headOfSocietyRef}
            onChange={() => changeHandler(headOfSocietyRef)}
          />

          <div className="col-md-8">
            <label for="validationServer02" className="form-label">
              Village
            </label>
            <input
              type="text"
              className="form-control"
              name = "village"
              ref={villageRef}
              onChange={() => changeHandler(villageRef)}
            />
          </div>

          <div className="col-md-8">
            <label for="title" className="form-label">
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
            <label for="title" className="form-label">
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
            <label for="title" className="form-label">
              Pincode
            </label>
            <input
              type="number"
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

      <h2>{state.formStatus}</h2>
      

      {state.newSociety?(
        <div>
          <h2>Society Added Successfully</h2>
          <DisplaySociety society={state.newSociety}/>
        </div>
      )
        :("")
      
      }

      {state.errMsg ? (
        <div>
          <h2>Request was not successful</h2>
          <br>{state.errMsg}</br>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
