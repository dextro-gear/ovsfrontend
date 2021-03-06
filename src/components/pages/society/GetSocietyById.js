import React, { useState } from "react";
import DisplaySociety from "./DisplaySociety";
import {fetchSociety} from "../../services/SocietyService";
import Navbar from "../../Navbar";

export default function GetSocietyById(){
  // society = {
  //     societyName :"anj",
  //     headOfSociety :"bhn",
  //     village :"njm",
  //     mandal :"sfgd",
  //     district:213,
  //     pincode:598,
  //   }

  const idRef = React.createRef();

  const initialState = {
    society: undefined,
    errMsg: undefined,
   
  };

 const [currentState, setNewState] = useState(initialState)

  const submitHandler= (event)=> {
    event.preventDefault();
    console.log("Current State",currentState);
    
    const promise = fetchSociety(currentState.id);
    const successFun = (response)=>{
      const newState = {...currentState, society: response.data};
      setNewState(newState);
    };
    const errFun = (error) =>{
      const newState = {...currentState, errMsg: error.message };
      setNewState(newState);
    };
    promise.then(successFun).catch(errFun);

  }
  const setFieldState = ()=>{
    const idValue = idRef.current.value;
    const newState = {...currentState, id:idValue, society :undefined,errMsg:undefined };
    setNewState(newState);
  }
    return (
      <div>
        <Navbar/>
       <div className="container container-sm border">
        <h3>
          <i>Get Society Details</i>
        </h3>
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label> Enter Society Id </label>
            <input
              name="id"
              type="number"
              ref={idRef}
              onChange={setFieldState}
              className="form-control"
            />
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-centre">
            <button className="btn btn-success me-md-2 btn-border-radius-lg " type="submit">
              Get Society !
            </button>
          </div>
        </form>

        {currentState.society? (
          <div>
            <h4>Society Details</h4>
            <DisplaySociety society={currentState.society} />
          </div>
        ) : (
          ""
        )}

        {
          currentState.errMsg ?(
            <div>
            <h4>Request Not Successfull </h4>
            <br />
             {currentState.errMsg}

            </div>
          ) :''
        }
        </div>
        </div>
      
    );
  }



