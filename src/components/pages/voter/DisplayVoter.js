export default function DisplayVoter({voter}){

    return(
        <div>
            <p>voter ID card no is <b>{voter.voterIDCardNo}</b></p>
            <p>first name is {voter.firstName}</p>
            <p>last name is {voter.lastName}</p>
            <p>gender is {voter.gender}</p>
            <p>reservationCategory is {voter.reservationCategory}</p>
            <p>mobileNo is {voter.mobileNo}</p>
            <p>emailID is {voter.emailID}</p>
            <p>address1 is {voter.address1}</p>
            <p>address2 is {voter.address2}</p>
            <p>mandal is {voter.mandal}</p>
            <p>district is {voter.district}</p>
            <p>pincode is {voter.pincode}</p>
        </div>
    );
}