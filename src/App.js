import {Route, BrowserRouter as Router, Link, Switch} from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import VoterNavbar from "./components/pages/voter/VoterNavbar";
import AddNewVoter from "./components/pages/voter/AddNewVoter";
import DisplayVoter from "./components/pages/voter/DisplayVoter";
import GetVoterById from "./components/pages/voter/GetVoterById";

function App() {
  return (
    <div>
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/VoterNavbar" component={VoterNavbar}/>
        <Route exact path="/addvoter" component={AddNewVoter}/>
        <Route exact path="/displayvoter" component={DisplayVoter}/>
        <Route exact path="/voterById" component={GetVoterById}/>
      </Switch>   
    </Router>
    </div>
  );
}

export default App;
