import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Myself from "./pages/Myself";
import WriteTIL from "./pages/WriteTIL";
import { useEffect, useState } from "react";
import XMLhttp from "./pages/XMLhttps";
import Fetch from "./pages/Fetch";
import Axios from "./pages/Axios";
import HomeworkAPI from "./pages/HomeworkAPI";
import Signup from "./pages/SIgnup";
import Login from "./pages/Login";
import { auth } from "./shared/firebase";
import { onAuthStateChanged } from "firebase/auth";
import LoginSuccess from "./pages/LoginSuccess";
import Storage from "./pages/Storage";
import HomeworkTIL from "./pages/HomeworkTIL";

function App() {
  const [listTIL, setListTIL] = useState([]);
  const [isLogin, setIsLogin] = useState(false); // 로그인 상태 관리

  console.log("auth.currentUser: ", auth.currentUser);

  // 로그인 상태 확인
  const loginCheck = async (user) => {
    if (user) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  };

  // 로그인 상태 감지
  useEffect(() => {
    onAuthStateChanged(auth, loginCheck);
    
  }, []);

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
        <Route path="/signup" element={<Signup />} />
        {isLogin ? (
          <Route path="/login" element={<LoginSuccess />} />
        ) : (
          <Route path="/login" element={<Login />} />
        )}
        <Route path="/storage" element={<Storage />} />
        <Route path="/homework-til" element={<HomeworkTIL />} />
        <Route path="/myself/:index" element={<Myself />} /> {/* 동적 라우팅 */}
      </Routes>
    </div>
  );
}

export default App;
