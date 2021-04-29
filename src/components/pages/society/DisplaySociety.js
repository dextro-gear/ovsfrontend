
export default function DisplaySociety({ society }) {
  // society = {
  //     societyName :"anj",
  //     headOfSociety :"bhn",
  //     village :"njm",
  //     mandal :"sfgd",
  //     district:213,
  //     pincode:598,
  //   }
  let { societyName , headOfSociety , village , mandal , district , pincode } = society;
  
  return (
    <div>
      <p>society name is {societyName}</p>
      <p>head of society is {headOfSociety}</p>
      <p>village is {village}</p>
      <p>mandal is {mandal}</p>
      <p>district is {district}</p>
      <p>pincode is {pincode}</p>
    </div>
  );
}
