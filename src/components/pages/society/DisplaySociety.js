
export default function DisplaySociety({ society }) {
  // society = {
  //     societyName :"anj",
  //     headOfSociety :"bhn",
  //     village :"njm",
  //     mandal :"sfgd",
  //     district:213,
  //     pincode:598,
  //   }

  return (
    <div>
      <p>society name is {society.societyName}</p>
      <p>head of society is {society.headOfSociety}</p>
      <p>village is {society.village}</p>
      <p>mandal is {society.mandal}</p>
      <p>district is {society.district}</p>
      <p>pincode is {society.pincode}</p>
    </div>
  );
}
