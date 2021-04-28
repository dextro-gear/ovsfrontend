import axios from 'axios';

const baseUrl="http://localhost:8585";
    

    function fetchVoter(id){
        const url=baseUrl+"/voters/byid/"+id ; 
        const promise=axios.get(url);
        return promise;
      }

    function addVoter(data) {
      const url = baseUrl + "/voters/add";
      
      console.log("inside addVoter service", data);
      const promise = axios.post(url, data);
      return promise;
    }

      function displayVoter() {
      const url = baseUrl + "/voters/display";
      const promise =axios.get(url);
      return promise;
    }

    function fetchAll(){
      const url = baseUrl + "/voters";
      const promise = axios.get(url);
      return promise;
  }

export {fetchVoter, addVoter, displayVoter, fetchAll};