import "./style.css";

import HeroSection from "../../components/HeroSection";
import Slider from "../../components/Slider/index";
import Feed from "../../components/Posts/index";
import "../../components/Posts/style.css";
export function Home() {
  return (
    <>
      <HeroSection />
      <Slider />
      <Feed />
    </>
  );
}

export default Home;
