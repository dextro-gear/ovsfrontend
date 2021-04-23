import {Route, BrowserRouter as Router, Link, Switch} from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import CastNewVote from './components/pages/votes/CastNewVote';
import './App.css';
import AddNewVoter from "./components/pages/voter/AddNewVoter";

function App() {
  return (
    <div>
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/castVote" component={CastNewVote}/>
        <Route exact path="/AddNewVoter" component={AddNewVoter}/>
      </Switch>   
    </Router>
    </div>
  );
}

export default App;
