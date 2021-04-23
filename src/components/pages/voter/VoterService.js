import axios from 'axios';

export default class VoterService {

    baseUrl="http://localhost:3000"

    fetchVoter(id){
        let url=this.baseUrl+"/voter/byid/"+id ; 
        let promise=axios.get(url);
        return promise;
      }
}