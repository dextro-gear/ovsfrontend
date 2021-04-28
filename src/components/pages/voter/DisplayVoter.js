export default function DisplayVoter({voter}){

    return(
        <div>
            voter ID card no is {voter.voterIDCardNo}
            first name is {voter.firstName}
            last name is {voter.lastName}
            gender is {voter.gender}
            reservationCategory is {voter.reservationCategory}
            mobileNo is {voter.mobileNo}
            emailID is {voter.emailID}
            address1 is {voter.address1}
            address2 is {voter.address2}
            mandal is {voter.mandal}
            district is {voter.district}
            pincode is {voter.pincode}
        </div>
    );

}