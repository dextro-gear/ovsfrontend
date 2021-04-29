import { useEffect, useState } from "react";
import { fetchAll } from "../../../services/VoterService";
import commonStyle from './commonStyle.module.css';
import DisplayVoter from "./DisplayVoter";

export default function GetAllVoters() {

    const [currentState, setNewState] = useState({ voters: undefined, errMsg: undefined });

    const fetchAllVoters = () => {
        console.log("inside use state function")
        const promise = fetchAll();
        promise.then(
            response => setNewState({ voters: response.data, errMsg: undefined })
        )
            .catch(
                error => setNewState({ voters: undefined, errMsg: error.message })
            )
    };

    useEffect(fetchAllVoters, []);

    console.log("inside getall voters", currentState.voters);

    return (
        <div>

            <h1>Get All voters</h1>

            <div className={commonStyle.content}>
                <ul >

                    {currentState.voters ? (

                        <DisplayVoter voters={currentState.voters} />

                    ) : ''}



                </ul>

            </div>
            { currentState.errMsg ? (

                <div className={commonStyle.error}>
                    Error in request processing
                    <br />
                    {currentState.errMsg}
                </div>
            ) : ''}


        </div>

    )

}