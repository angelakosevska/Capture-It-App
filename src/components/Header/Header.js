import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <>
      <header>
        <div className="container-h">
          <div className="NavBar">
            <div>
              <div className="Logo"><a href="https://www.freepnglogos.com/images/camera-logo-png-7456.html">Capture It</a> </div>
            </div>
            <div className="navButton">
              <Link to="/">Home</Link>
            </div>
            <div className="navButton">
              <Link to="/profile">Profile</Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
