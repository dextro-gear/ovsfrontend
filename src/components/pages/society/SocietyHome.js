import { Link} from 'react-router-dom';
import commonStyle from "./commonStyle.module.css";

export default function SocietyHome() {

    return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/" className="navbar-brand" >
                        Society Module
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        
                        <li className="nav-item">
                            <Link to="/addSociety" className="nav-link" >
                                <span>Add Society</span>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/societyById" className="nav-link" >
                                <span>Get Society details by ID</span>
                            </Link>
                        </li>

                    </ul>
                </div>
            </nav>
            <div className={commonStyle.content}>
            <div>
                       <h3> Welcome to Society Module home.</h3>
                    </div>
                    </div>
        </div>
    )
}