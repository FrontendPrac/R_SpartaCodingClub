import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Myself from "./pages/Myself";
import WriteTIL from "./pages/WriteTIL";
import { useState } from "react";
import XMLhttp from "./pages/XMLhttps";
import Fetch from "./pages/Fetch";
import Axios from "./pages/Axios";
import HomeworkAPI from "./pages/HomeworkAPI";

function App() {
  const [listTIL, setListTIL] = useState([]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home listTIL={listTIL} />} />
        <Route
          path="/write"
          element={<WriteTIL listTIL={listTIL} setListTIL={setListTIL} />}
        />
        <Route path="/xmlhttp" element={<XMLhttp />} />
        <Route path="/fetch" element={<Fetch />} />
        <Route path="/axios" element={<Axios />} />
        <Route path="/homework-api" element={<HomeworkAPI />} />
        <Route path="/myself/:index" element={<Myself />} /> {/* 동적 라우팅 */}
      </Routes>
    </div>
  );
}

export default App;
