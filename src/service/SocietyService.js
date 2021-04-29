import axios from 'axios';




  const baseUrl="http://localhost:8585";

   function fetchSociety(id){
      const  url=baseUrl+"/societies/byid/"+id ; 
      const promise=axios.get(url);
       return promise;
    }
   function addSociety(data){
      const url = baseUrl+"/societies/add";
      let resquestData = {societyName:data.societyName,
         headOfSociety:data.headOfSociety,
         village:data.village,
         mandal:data.mandal,
         district:data.district,
         pincode:data.pincode}
         const promise = axios.post(url,resquestData);
         return promise;


   }

export{fetchSociety,addSociety};
