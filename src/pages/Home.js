
import "./Style.css";
import { Link } from "react-router-dom";

export function Home(){
    return (<><h1>Home page</h1>
    <div>Events preview</div>
<Link to="/event">Event 1</Link>
    </>)

}

export default Home;