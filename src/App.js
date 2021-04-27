import {Route, BrowserRouter as Router, Link, Switch} from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import CastNewVote from './components/pages/votes/CastNewVote';
import SocietyHome from'./components/pages/society/SocietyHome';
import './App.css';
import DisplaySociety from "./components/pages/society/DisplaySociety";


function App() {
 
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/castVote" component={CastNewVote}/>
        <Route exact path ="/society" component={SocietyHome}/>
      </Switch>   
    </Router>
   
  );
}

export default App;
