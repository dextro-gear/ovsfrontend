export default function DisplayNewVote({vote}){

    return(
        <span>

            voterId is {vote.voterId} <br/> candidateId is {vote.candidateId} <br/> societyId is {vote.societyId}
        </span>
    )

}