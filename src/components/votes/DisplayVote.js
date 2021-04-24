export default function DisplayVote({ vote }) {
  return (
    <div>
      <h5>voterId is</h5>
      <p>{vote.voterId}</p>
      <h5>candidateId is</h5>
      <p>{vote.candidateId}</p>
      <h5>candidateFirstName is</h5>
      <p>{vote.candidateFirstName}</p>
      <h5>candidateLastName is</h5>
      <p>{vote.candidateLastName}</p>
      <h5>societyId is</h5>
      <p>{vote.societyId}</p>
    </div>
  );
}
