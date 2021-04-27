import axios from 'axios';




  const baseUrl="http://localhost:8585";

   function fetchSociety(id){
      const  url=this.baseUrl+"/socities/byid/"+id ; 
      const promise=axios.get(url);
       return promise;
    }
   //function AddSociety

export{fetchSociety};
