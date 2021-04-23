import React, { useState } from "react";


export default function AddSociety() {
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
    formStatus: "",
  };

  const [state, setState] = useState(initialState);

  const submitHandler = (event) => {
    event.preventDefault();
    setState({ ...state, formStatus: "Form Submiyted Successfully" });
  };

  const setFieldState = (ref) => {
    const fieldName = ref.current.name;
    const fieldValue = ref.current.value;
    const newState = {
      ...state,
      [fieldName]: fieldValue,
    };
    setState(newState);
  };
  return (
    <div>
      <form onSubmit={(event) => submitHandler(event)}>
        <div class="col-md-4">
          <label for="title" class="form-label">
            Society Name
          </label>
          <input
            type="text"
            class="form-control"
            ref={societyNameRef}
            onChange={() => setFieldState(societyNameRef)}
          />
        </div>

        <div class="col-md-4">
          <label for="title" class="form-label">
            Head of Society
          </label>
          <input
            type="text"
            class="form-control "
            ref={headOfSocietyRef}
            onChange={() => setFieldState(headOfSocietyRef)}
          />

          <div class="col-md-8">
            <label for="validationServer02" class="form-label">
              Village
            </label>
            <input
              type="text"
              class="form-control"
              ref={villageRef}
              onChange={() => setFieldState(villageRef)}
            />
          </div>

          <div class="col-md-8">
            <label for="title" class="form-label">
              Mandal
            </label>
            <input
              type="text"
              class="form-control"
              ref={mandalRef}
              onChange={() => setFieldState(mandalRef)}
            />
          </div>

          <div class="col-md-8">
            <label for="title" class="form-label">
              District
            </label>
            <input
              type="number"
              class="form-control"
              ref={districtRef}
              onChange={() => setFieldState(districtRef)}
            />
          </div>

          <div class="col-md-8">
            <label for="title" class="form-label">
              Pincode
            </label>
            <input
              type="number"
              class="form-control"
              ref={pincodeRef}
              onChange={() => setFieldState(pincodeRef)}
            />
          </div>
          <br />
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button
              class="btn btn-success me-md-2 btn-border-radius-lg"
              type="button"
            >
              Submit !
            </button>
          </div>
        </div>
      </form>

      {state.formStatus ? <h2>Society Added Successfully !</h2> : ""}

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
