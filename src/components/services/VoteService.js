import axios from "axios";

const baseUrl = "http://localhost:8585";

/**
 * This function cast the vote 
 *
 * @param {data} this is the data that user enter in the form 
 * @returns {Promise} A promise of the response from the back-end.
 */

function addNewVote(data) {
  const url = baseUrl + "/votes/add";

  const promise = axios.post(url, data);
  return promise;
}

/**
 * This function fetches the vote details of the already casted vote with given voterCardID.
 *
 * @param {string} voterCardId ID of the voterCard whose casted vote details are to be retrieved
 * @returns {Promise} A promise of the response from the back-end.
 */
function searchByVoterCardId(voterCardId) {
  const url = baseUrl + "/votes/byVoterCardId/" +voterCardId ;
  const promise = axios.get(url);
  return promise;
}

export { addNewVote, searchByVoterCardId };
