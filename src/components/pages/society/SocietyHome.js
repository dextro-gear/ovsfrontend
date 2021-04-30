import { Link } from "react-router-dom";
import Navbar from "../../Navbar";
import commonStyle from "./commonStyle.module.css";

export default function SocietyHome() {
  return (
    <div>
      <Navbar />
      <div className={commonStyle.content}>
        <div>
          <h2> Welcome to Society Module home.</h2>
        </div>
      </div>
    </div>
  );
}
