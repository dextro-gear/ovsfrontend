import axios from 'axios';

const baseUrl="http://localhost:8585";
    
/**
 * This function fetches the voter details by voterId card number
 * @param {int} id -The voter cardId for whom the details are to be fetched.
 * @returns all the voter details are fetched.
 */
    function fetchVoter(id){
        const url=baseUrl+"/voters/"+id ; 
        const promise=axios.get(url);
        return promise;
      }

/**
 * This function adds voter to the database.
 * @param {data} data is all the information of the voter.
 * @returns {Promise} A promise of the response from the back-end.
 */
    function addVoter(data) {
      const url = baseUrl + "/voters/add";
      
      console.log("inside addVoter service", data);
      const promise = axios.post(url, data);
      return promise;
    }

/**
 * This function is to display the voter data
 * @returns {Promise} A promise of the response from the back-end.
 */
      function displayVoter() {
      const url = baseUrl + "/voters/display";
      const promise =axios.get(url);
      return promise;
    }

export {fetchVoter, addVoter, displayVoter};