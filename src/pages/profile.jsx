import { Link } from "react-router-dom";
import {Layout} from "../UI/Layout";
import Routing from "../components/Routing";
import axios from "axios";

export function Profile() {


  return (
    <>


      <div>Profile Picture</div>
      <br />
      <h1>Profile page</h1>
      <Link to="/event">Event 1</Link>
      <Link to="/album">ALbum</Link>
   
    </>
  );
}

export default Profile;
