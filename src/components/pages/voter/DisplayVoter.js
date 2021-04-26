export default function DisplayVoter({voter}){

    let {gender, reservationCategory,mobileNo,emailID,address1,address2,mandal,district,pincode,cooperativeSociety} = voter;
    return(
        <div>
            gender is {voter.gender}
            reservationCategory is {voter.reservationCategory}
            mobileNo is {voter.mobileNo}
            emailID is {voter.emailID}
            address1 is {voter.address1}
            address2 is {voter.address2}
            mandal is {voter.mandal}
            district is {voter.district}
            pincode is {voter.pincode}
            cooperativeSociety is {voter.cooperativeSociety}
        </div>
    );

}