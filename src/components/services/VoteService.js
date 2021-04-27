import axios from "axios";

const baseUrl = "http://localhost:8585";

function addNewVote(data) {
  const url = baseUrl + "/votes/add";
  
  const promise = axios.post(url,data);
  return promise;

}

function searchByVoterId(id){
    const url= baseUrl+"/votes/byVoterId/" + id;
    const promise =axios.get(url);
    return promise;
}

export{addNewVote ,searchByVoterId}