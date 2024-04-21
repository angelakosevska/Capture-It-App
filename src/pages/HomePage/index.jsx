import Layout from "../../UI/Layout";
import "./Style.css";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <Layout>
      <div>Events preview</div>
      <Link to="/event">Event 1</Link>
    </Layout>
  );
}

export default Home;
