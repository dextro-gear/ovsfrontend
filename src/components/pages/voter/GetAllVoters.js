import { useEffect, useState } from "react";
import { fetchAll } from "../../../services/VoterService";
import commonStyle from './commonStyle.module.css';
import DisplayVoter from "./DisplayVoter";

export default function GetAllVoters() {

    /*
        const c1={id:1, name:'shivender',age:21, address:'chennai'};
        const c2={id:2, name:'raja',age:22, address:'chennai'};
    
         const customers=[c1, c2];      
    
    */
    const [currentState, setNewState] = useState({ voters: undefined, errMsg: undefined });

    const fetchAllVoters = () => {
        console.log("inside use state function")
        const promise = fetchAll();
        promise.then(
            response => setNewState({ voters: response.data, errMsg: undefined })
        ).
            catch(
                error => setNewState({ voters: undefined, errMsg: error.message })
            )
    };

    /**
     * use effect gets execute when component is mounted and also when component is updated
     * in this demo we don't want it to execute when component is updated because in usestate we are changing the state
     *  that means component has got updated and so usestate will get execute again , this will become an infinite cycle
     * to break this cycle, empty array is passed, now useeffect will be executed only when component is mounted
     *  and not when it is updated
     */
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