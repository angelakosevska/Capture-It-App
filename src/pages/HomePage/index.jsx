import Layout from "../../UI/Layout";
import "./style.css";
import { Link } from "react-router-dom";
import Routing from "../../components/Routing";
export function Home() {
  return (
    <>
    
      <div>Events preview</div>
      <Link to="/event">Event 1</Link>
    </>
  );
}

export default Home;
