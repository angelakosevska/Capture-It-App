import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <>
      <div className="NavBar">
        {/* <Logo> </Logo>
    <Search></Search>
    <ProfileIcon></ProfileIcon> */}
        <div>
          <h1 className="Logo">Capture It </h1>
        </div>
        <div className="navButton">
          <Link to="/">Home</Link>
        </div>
        <div className="navButton">
          <Link to="/profile">Profile</Link>
        </div>
      </div>
     
    </>
  );
}

export default Header;
