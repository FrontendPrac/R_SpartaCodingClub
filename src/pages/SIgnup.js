import { auth, db } from "../shared/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { useRef } from "react";

const Signup = () => {
  // Ref
  const email_ref = useRef();
  const name_ref = useRef();
  const password_ref = useRef();

  // 회원가입 로직
  const onClickSignup = async () => {
    const user = await createUserWithEmailAndPassword(
      auth,
      email_ref.current.value,
      password_ref.current.value
    );
    console.log("user: ", user);

    // 유저 정보 저장하기
    const user_doc = await addDoc(collection(db, "users"), {
      name: name_ref.current.value,
      email: user.user.email,
    });

    console.log("user_doc", user_doc);
  };

  return (
    <>
      <div>SIgnup</div>
      <div>
        이메일 :<input type="text" ref={email_ref} />
      </div>
      <div>
        이름 : <input type="text" ref={name_ref} />
      </div>
      <div>
        비밀번호 : <input type="password" ref={password_ref} />
      </div>
      <button onClick={onClickSignup}>회원가입</button>
    </>
  );
};

export default Signup;
