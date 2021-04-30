import axios from 'axios';




  const baseUrl="http://localhost:8585";

  /**
 * This function fetches the society with given ID.
 *
 * @param {int} societyID ID of the society which has to be retrieved from back-end. 
 * @returns {Promise} A promise of the response from the back-end.
 */

   function fetchSociety(societyId){
      const  url=baseUrl+"/societies/byid/"+societyId ; 
      const promise=axios.get(url);
       return promise;
    }



/**
 * This function adds a new society in the database.
 *
 * @param {data} society object which must be saved
 * @returns {Promise} A promise of the response from the back-end.
 */

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
