import axios from 'axios';
const baseUrl="http://localhost:8585";


export default class VoterService {
    

    fetchVoterbyId(id){
        const url=this.baseUrl+"/voter/byid/"+id ; 
        const promise=axios.get(url);
        return promise;
      }

    addVoter(voter) {
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

    displayVoter() {
      const url = baseUrl + "/voter/display";
      const promise =axios.get(url);
      return promise;
    }
}