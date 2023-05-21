import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Myself from "./pages/Myself";
import WriteTIL from "./pages/WriteTIL";
import { useState } from "react";
import Sleeptime from "./pages/Sleeptime";

function App() {
  const [listTIL, setListTIL] = useState([]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home listTIL={listTIL} />} /> {/* 라우팅 */}
        <Route
          path="/write"
          element={<WriteTIL listTIL={listTIL} setListTIL={setListTIL} />}
        />{" "}
        {/* 라우팅 */}
        <Route path="/sleeptime" element={<Sleeptime />} /> {/* 라우팅 */}
        <Route path="/myself/:index" element={<Myself />} /> {/* 동적 라우팅 */}
      </Routes>
    </div>
  );
}

export default App;
