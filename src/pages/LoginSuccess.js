import { auth } from "../shared/firebase";
import { signOut } from "firebase/auth";

const LoginSuccess = () => {
  return (
    <>
      <h1>환영합니다</h1>
      {/* 로그아웃 로직 */}
      <button onClick={() => signOut(auth)}>로그아웃</button>
    </>
  );
};

export default LoginSuccess;
