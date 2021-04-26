import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import commonStyle from "./commonStyle.module.css";

export default function VoterNavbar() {

    return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/" className="navbar-brand" >
                        Voter Module
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        
                        <li className="nav-item">
                            <Link to="/addvoter" className="nav-link" >
                                <span>Add Voter</span>
                            </Link>
                        </li>


                        <li className="nav-item">
                            <Link to="/displayvoter" className="nav-link" >
                                <span>Get Voter Details</span>
                            </Link>
                        </li>


                        <li className="nav-item">
                            <Link to="/voterById" className="nav-link" >
                                <span>Get voter details by ID</span>
                            </Link>
                        </li>

                    </ul>
                </div>
            </nav>
            <div className={commonStyle.content}>
            <div>
                       <h3> Welcome to Voter Module home.</h3>
                    </div>
                    </div>
        </div>
    )
}