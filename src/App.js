import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import SocietyHome from'./components/pages/society/SocietyHome';
import DisplaySociety from "./components/pages/society/DisplaySociety";
import AddSociety from "./components/pages/society/AddSociety";
import GetSocietyById from "./components/pages/society/GetSocietyById";
import CastNewVote from "./components/pages/votes/CastNewVote";
import ViewVoteDetailsByVoterId from "./components/pages/votes/ViewVoteDetailsByVoterId";
import "./App.css";
import ElectionResultPage from "./components/pages/ElectionResultPage";
import { addNewVote, searchByVoterId } from "./components/services/VoteService";

function App() {
 
  return (
    <Router>
      <Switch>

        <Route exact path="/" component={LandingPage}/>
        <Route exact path ="/society" component={SocietyHome}/>
        <Route exact path ="/addSociety" component={AddSociety}/>
        <Route exact path ="/societyDetails" component={DisplaySociety}/>
        <Route exact path ="/societyById" component={GetSocietyById}/>
        <Route exact path="/castVote" component={CastNewVote} />
        <Route exact path="/result" component={ElectionResultPage} />
        <Route exact path="/byVoterId" component={ViewVoteDetailsByVoterId} />
      </Switch>
    </Router>
  );
}

export default App;
