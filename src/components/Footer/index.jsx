import "./style.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <footer>
        <div className="container-f">
          <div className="Footer">
            Links
            <Link to="/event">Event </Link>
            <Link to="/album">Album</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
