import "./App.css";
import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import AddNewVoter from "./components/pages/voter/AddNewVoter";
import DisplayVoter from "./components/pages/voter/DisplayVoter";
import GetVoterById from "./components/pages/voter/GetVoterById";
import SocietyHome from "./components/pages/society/SocietyHome";
import DisplaySociety from "./components/pages/society/DisplaySociety";
import AddSociety from "./components/pages/society/AddSociety";
import GetSocietyById from "./components/pages/society/GetSocietyById";
import CastNewVote from "./components/pages/votes/CastNewVote";
import ViewVoteDetailsByVoterCardId from "./components/pages/votes/ViewVoteDetailsByVoterCardId";
import ElectionResultPage from "./components/pages/ElectionResultPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/society" component={SocietyHome} />
        <Route exact path="/addSociety" component={AddSociety} />
        <Route exact path="/societyDetails" component={DisplaySociety} />
        <Route exact path="/societyById" component={GetSocietyById} />
        <Route exact path="/castVote" component={CastNewVote} />
        <Route exact path="/result" component={ElectionResultPage} />
        <Route
          exact
          path="/byVoterId"
          component={ViewVoteDetailsByVoterCardId}
        />
        <Route exact path="/addVoter" component={AddNewVoter} />
        <Route exact path="/voterById" component={GetVoterById} />
      </Switch>
    </Router>
  );
}

export default App;
