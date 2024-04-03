import { Link } from "react-router-dom";
import {Layout} from "../UI/Layout";
export function Profile() {
  return (
    <>
    <Layout>
      <div>Profile Picture</div>
      <br />
      <h1>Profile page</h1>
      <Link to="/event">Event 1</Link>
      </Layout>
    </>
  );
}

export default Profile;
