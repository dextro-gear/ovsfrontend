import axios from "axios";

var serverURL = "http://localhost:8585/results";

/**
 * This function fetches all results from the back-end.
 *
 * @returns {Promise} A promise of the response from the back-end.
 */
function getElectionResult() {
  var response = axios.get(serverURL + "/electionresult");
  return response;
}

/**
 * This function fetches the result of the candidate with given ID.
 *
 * @param {int} candidateID ID of the Candidate whose result is to be retrieved
 * @returns {Promise} A promise of the response from the back-end.
 */
function getResultByCandidateID(candidateID) {
  var response = axios.get(serverURL + "/bycandidate/" + candidateID);
  return response;
}

/**
 * This function fetches the current winning candidate from the back-end.
 *
 * @returns {Promise} A promise of the response from the back-end.
 */
function getCurrentWinningCandidate() {
  var response = axios.get(serverURL + "/winner");
  return response;
}

export {
  getElectionResult,
  getResultByCandidateID,
  getCurrentWinningCandidate,
};
