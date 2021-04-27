import axios from 'axios';

const baseUrl="http://localhost:8585";
    

    function fetchVoter(id){
        const url=baseUrl+"/voter/byid/"+id ; 
        const promise=axios.get(url);
        return promise;
      }

    function addVoter(voter) {
      const url = baseUrl + "/voter/addVoter";
      let requestData = {

            firstName: voter.firstName,
            lastName: voter.lastName,
            gender: voter.gender,
            reservationCategory: voter.reservationCategory,
            mobileNo: voter.mobileNo,
            emailID: voter.emailID,
            address1: voter.address1,
            address2: voter.address2,
            mandal:voter.mandal,
            district: voter.district,
            pincode: voter.pincode,
            cooperativeSociety: voter.cooperativeSociety
      };
      console.log("inside addVoter service", requestData);
      const promise = axios.post(url, requestData);
      return promise;
    }

      function displayVoter() {
      const url = baseUrl + "/voter/display";
      const promise =axios.get(url);
      return promise;
    }

    function fetchAll(){
      const url = baseUrl + "/voters";
      const promise = axios.get(url);
      return promise;
  }

export {fetchVoter, addVoter, displayVoter, fetchAll};