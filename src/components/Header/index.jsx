import { Link } from "react-router-dom";
import "./style.css";
const Header =() => {
  return (
    <>
      <header>
       
          <div>
            <div className="Logo">Capture It </div>
          </div>
          <div className="navButton">
            <Link to="/">Home</Link>
          </div>
          <div className="navButton">
            <Link to="/profile">Profile</Link>
          </div>
    
      </header>
    </>
  );
}

export default Header;
