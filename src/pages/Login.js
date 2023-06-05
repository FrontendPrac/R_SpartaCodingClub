import { useRef } from "react";
import { auth, db } from "../shared/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getDocs, where, query, collection } from "firebase/firestore";

const Login = () => {
  // Ref
  const email_ref = useRef();
  const name_ref = useRef();
  const password_ref = useRef();

  // 로그인 로직
  const onClickLogin = async () => {
    const user = await signInWithEmailAndPassword(
      auth,
      email_ref.current.value,
      password_ref.current.value
    );

    console.log("user: ", user);

    // 유저 정보 가져오기
    const querySnapshot = await getDocs(
      query(collection(db, "users"), where("email", "==", user.user.email))
    );

    // 배열 처리
    querySnapshot.docs.forEach((doc) => {
      console.log("doc.data() : ", doc.data());
    });
  };
  return (
    <>
      <div>Login</div>
      <div>
        이메일 :<input type="text" ref={email_ref} />
      </div>
      <div>
        이름 : <input type="text" ref={name_ref} />
      </div>
      <div>
        비밀번호 : <input type="password" ref={password_ref} />
      </div>
      <button onClick={onClickLogin}>로그인</button>
    </>
  );
};

export default Login;
