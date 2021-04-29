import {Route, BrowserRouter as Router, Link, Switch} from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import SocietyHome from'./components/pages/society/SocietyHome';
import './App.css';
import DisplaySociety from "./components/pages/society/DisplaySociety";
import AddSociety from "./components/pages/society/AddSociety";
import GetSocietyById from "./components/pages/society/GetSocietyById";


function App() {
 
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        
        <Route exact path ="/society" component={SocietyHome}/>
        <Route exact path ="/addSociety" component={AddSociety}/>
        <Route exact path ="/societyDetails" component={DisplaySociety}/>
        <Route exact path ="/societyById" component={GetSocietyById}/>

      </Switch>   
    </Router>
   
  );
}

export default App;
