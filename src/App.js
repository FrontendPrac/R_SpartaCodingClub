import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Myself from "./pages/Myself";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} /> {/* 라우팅 */}
        <Route path="/myself/:index" element={<Myself />} /> {/* 동적 라우팅 */}
      </Routes>
    </div>
  );
}

export default App;
