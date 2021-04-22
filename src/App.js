import {Route, BrowserRouter as Router, Link, Switch} from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
      </Switch>
    </Router>
  );
}

export default App;
