import axios from "axios";

var serverURL = "http://localhost:8585/results";

function getElectionResult() {
  var response = axios.get(serverURL + "/electionresult");
  return response;
}

function getResultByCandidateID(candidateID) {
  var response = axios.get(serverURL + "/bycandidate/" + candidateID);
  return response;
}

function getCurrentWinningCandidate() {
  var response = axios.get(serverURL + "/winner");
  return response;
}

export {
  getElectionResult,
  getResultByCandidateID,
  getCurrentWinningCandidate,
};
