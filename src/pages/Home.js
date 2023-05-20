import { useSelector, useDispatch } from "react-redux";
// import { changeName } from "./redux/modules/myself";
import { changeName } from "../redux/modules/myselfSlice";

const Home = () => {
  // store 가져오기
  const store = useSelector((state) => state);
  console.log("store.myself: ", store.myself);

  // dispatch 가져오기
  const dispatch = useDispatch();

  return (
    <>
      <p>이름 : {store.myself.name}</p>
      <p>나이 : {store.myself.age}</p>
      <button onClick={() => dispatch(changeName("리기동"))}>
        이름 바꾸기
      </button>
    </>
  );
};

export default Home;
