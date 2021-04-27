import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import CastNewVote from "./components/pages/votes/CastNewVote";
import ViewVoteDetailsByVoterCardId from "./components/pages/votes/ViewVoteDetailsByVoterCardId";
import "./App.css";
import ElectionResultPage from "./components/pages/ElectionResultPage";
import {
  addNewVote,
  searchByVoterCardId,
} from "./components/services/VoteService";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/castVote" component={CastNewVote} />
        <Route exact path="/result" component={ElectionResultPage} />
        <Route
          exact
          path="/byVoterId"
          component={ViewVoteDetailsByVoterCardId}
        />
      </Switch>
    </Router>
  );
}

export default App;
