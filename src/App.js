import { useEffect, useState } from "react";
import "./App.css";
import Routing from "./components/Routing/index.jsx";
import Loading from "./components/Loading/index.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);
  if (loading) {
    return (
      <>
        <div className="loading">
          <Loading />
        </div>
      </>
    );
  }

  return (
    <>
      <Routing />
    </>
  );
}

export default App;
