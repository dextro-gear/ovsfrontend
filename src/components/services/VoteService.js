import axios from "axios";

const baseUrl = "http://localhost:8585";

function addNewVote(data) {
  const url = baseUrl + "/votes/add";

  const promise = axios.post(url, data);
  return promise;
}

function searchByVoterCardId(id) {
  const url = baseUrl + "/votes/byVoterCardId/" + id;
  const promise = axios.get(url);
  return promise;
}

export { addNewVote, searchByVoterCardId };
