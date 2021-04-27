import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import CastNewVote from "./components/pages/votes/CastNewVote";
import ViewVoteDetailsByVoterId from "./components/pages/votes/ViewVoteDetailsByVoterId"
import "./App.css";
import ElectionResultPage from "./components/pages/ElectionResultPage";
import { addNewVote, searchByVoterId } from "./components/services/VoteService";

function App() {


/*  const data ={
    voterID: 4,
    candidateID: 6,
    //candidateFirstName: "jhalak",
    //candidateLastName: "gandhi",
    societyID: 3
  }
*/
/*  const  promise = addNewVote(data);
  promise.then(response=>console.log("success",response.data))
  .catch(error=>console.log("unsuccessful",error.message));
  */
const id=4;
  const  promise = searchByVoterId(id);
  promise.then(response=>console.log("success",response.data))
  .catch(error=>console.log("unsuccessful",error.response.data));
 return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/castVote" component={CastNewVote} />
        <Route exact path="/result" component={ElectionResultPage} />
        <Route exact path="/byVoterId" component={ViewVoteDetailsByVoterId} />
      </Switch>
    </Router>
  );
}

export default App;
