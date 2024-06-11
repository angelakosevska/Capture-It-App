import "./style.css";
import { Link } from "react-router-dom";
import Routing from "../../components/Routing";
import HeroSection from "../../components/HeroSection";
import Slider from "../../components/Slider/index";
import Feed from "../../components/Posts/index";
import "../../components/Posts/style.css"
export function Home() {
  return (
    <>
      <HeroSection />
      <Slider />
      <Feed />
      <div>Events preview</div>
      <Link to="/event">Event 1</Link>
    </>
  );
}

export default Home;
