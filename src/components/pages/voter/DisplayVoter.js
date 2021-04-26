export default function DisplayVoter({voters}){

    return(
        <div>
            first name is {voters.firstName}
            last name is {voters.lastName}
            gender is {voters.gender}
            reservationCategory is {voters.reservationCategory}
            mobileNo is {voters.mobileNo}
            emailID is {voters.emailID}
            address1 is {voters.address1}
            address2 is {voters.address2}
            mandal is {voters.mandal}
            district is {voters.district}
            pincode is {voters.pincode}
            cooperativeSociety is {voters.cooperativeSociety}
        </div>
    );

}