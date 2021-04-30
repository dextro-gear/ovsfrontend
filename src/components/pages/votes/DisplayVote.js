import commonStyle from "./commonStyle.module.css";
/**
 *
 * Displaying details of vote that is casted
 */

export default function DisplayVote({ vote }) {
  return (
    <div className={commonStyle.result}>
      <h5>voteId is</h5>
      <p>{vote.voteId}</p>
      <h5>candidateId is</h5>
      <p>{vote.candidateId}</p>
      <h5>candidateFirstName is</h5>
      <p>{vote.candidateFirstName}</p>
      <h5>candidateLastName is</h5>
      <p>{vote.candidateLastName}</p>
      <h5>societyId is</h5>
      <p>{vote.societyId}</p>
      <h5>VotingDateTime when vote is casted is</h5>
      <p>{vote.votingDateTime}</p>
    </div>
  );
}
