import React, { useState } from "react";
import DisplayVoter from "./DisplayVoter";
import commonStyle from "./commonStyle.module.css";
import {fetchVoter} from "../../../services/VoterService";

export default function GetVoterById() {

    const idRef = React.createRef();
    const initialState={ id:undefined, voter:undefined, errMsg:undefined };

    const [currentState, setNewState] = useState(initialState);

    const submitHandler = (event) => {
        event.preventDefault();
        console.log("current state", currentState);
        const promise = fetchVoter(currentState.id);
        const successFun = (response) => {
            const newState = { ...currentState, voter: response.data };
            setNewState(newState);
        };

        const errFun = (error) => {
            const newState = { ...currentState, errMsg: error.message };
            setNewState(newState);
        };

        promise.then(successFun).catch(errFun);

    }

    const setFieldState = () => {
        const idValue = idRef.current.value;
        const newState = { ...currentState, id: idValue, voter: undefined, errMsg: undefined };
        setNewState(newState);
    }

    return (
        <div>
            <h1> Get voter details by id</h1>

            <div className={commonStyle.content}>
                <form onSubmit={submitHandler} className={commonStyle.content}>

                    <div className="form-group">
                        <label>Enter id</label>

                        <input name="id" type="number" ref={idRef} onChange={setFieldState} className="form-control" />

                    </div>

                    <button className="btn btn-primary">Get Voter</button>

                </form>

                {currentState.voter ? (
                    <div>
                        <DisplayVoter voter={currentState.voter} />
                    </div>
                ) : ''}


                {
                    currentState.errMsg ? (

                        <div className={commonStyle.error}>
                            Request processing unsuccessful
                            <br />
                            {currentState.errMsg}

                        </div>
                    ) : ''

                }
            </div>
        </div>

    );

}
















/*class GetVoterById extends Component {

      let voter = {
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

    idRef = React.createRef();
    service = new fetchVoter();
    initialState={voter:undefined, error:undefined};
    constructor(props) {
        super(props);
        this.state=this.initialState;
    }

    submitHandler(event) {
        this.state=this.initialState;
        event.preventDefault();
        const id = this.idRef.current.value;
        console.log("id for which voter details has to be submitted");
        let promise = this.service.fetchVoterbyId(id);
        promise.then((response) => {            
            const voter=response.data;
            console.log("successful, Voter fetched", voter);
            this.setState({...this.state,voter:voter});

        })
            .catch((err) => {
                console.log("inside error callback",);
                this.setState({...this.state,error:err.response.data});
            }

            );

    }
    render() {
        return (
            <div>
                <h3>Get Voter by id </h3>
                <form>
                    <div>
                        <label>Enter Voter id</label>
                        <input type="number" ref={this.idRef} />
                    </div>
                    <button onClick={(event) => this.submitHandler(event)}>
                        Get Voter Details
          </button>
                </form>
                <h3>Fetched Voter Details</h3>

                {this.state.voter ? (
                    <DisplayVoter voter={this.state.voter} />
                ) : this.state.error }
            </div>
        );
    }
}

export default GetVoterById;
*/