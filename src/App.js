import { useSelector, useDispatch } from "react-redux";
import { changeName } from "./redux/modules/myself";

function App() {
  // store 가져오기
  const store = useSelector((state) => state);
  console.log("store.myself: ", store.myself);

  // dispatch 가져오기
  const dispatch = useDispatch(changeName("리기동"));

  return (
    <>
      <p>이름 : {store.myself.name}</p>
      <button onClick={() => dispatch}>이름 바꾸기</button>
    </>
  );
}

export default App;
