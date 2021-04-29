import axios from "axios";

var serverURL = "http://localhost:8585/results";

function getElectionResult() {
  var responseData = axios
    .get(serverURL + "/electionresult")
    .then((response) => response.data)
    .catch((error) => console.log(error));

  return responseData;
}

function getResultByCandidateID(candidateID) {
  var responseData = axios
    .get(serverURL + "/bycandidate/" + candidateID)
    .then((response) => response.data)
    .catch((error) => console.log(error));

  return responseData;
}

function getCurrentWinningCandidate() {
  var responseData = axios
    .get(serverURL + "/winner")
    .then((response) => response.data)
    .catch((error) => console.log(error));

  return responseData;
}

export {
  getElectionResult,
  getResultByCandidateID,
  getCurrentWinningCandidate,
};
