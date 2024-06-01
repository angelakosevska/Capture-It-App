import "./style.css";
import { Link } from "react-router-dom";
const Footer=()=> {
  return (
    <>
      <footer>
        <div className="container-f">
          <div className="Footer">
            Links
            <Link to="/event/:id">Event </Link>
            <Link to="/album/:id">Album</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
