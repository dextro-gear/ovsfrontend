import axios from "axios";

const baseUrl = "http://localhost:8585";

/**
 * scenario : adding new vote 
 * parameter :takes form data as an input 
 * return promise
 */

function addNewVote(data) {
  const url = baseUrl + "/votes/add";

  const promise = axios.post(url, data);
  return promise;
}

/**
 * scenario : fetching vote details of castedVote from the voterCardId
 * parameter :take id as an input 
 * return promise
 */

function searchByVoterCardId(id) {
  const url = baseUrl + "/votes/byVoterCardId/" + id;
  const promise = axios.get(url);
  return promise;
}

export { addNewVote, searchByVoterCardId };
