import React, { Component } from "react";
import DisplayVoter from "./DisplayVoter";
import VoterService from "../../../services/VoterService";


class GetVoterById extends Component {

    /*  let voter = {
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

    idRef = React.createRef();
    service = new VoterService();
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
        let promise = this.service.fetchVoter(id);
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