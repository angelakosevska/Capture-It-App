import { useEffect, useState } from "react";
import "./App.css";
import Routing from "./components/Routing/index.jsx";
import Loading from "./components/Loading/index.jsx";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3300);
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
// actual ruti tuka kje gi definirame so path
/*<>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/event" element={<Event />} />
        <Route path="/album" element={<Album />} />
    </Routes>
    </>*/
