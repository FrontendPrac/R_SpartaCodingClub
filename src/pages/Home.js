import { useSelector, useDispatch } from "react-redux";
// import { changeName } from "./redux/modules/myself";
import { changeName } from "../redux/modules/myselfSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  // store 가져오기
  const store = useSelector((state) => state);
  console.log("store: ", store);

  // listTIL 가져오기
  const listTIL = useSelector((store) => store.til.listTIL);
  console.log("listTIL: ", listTIL);

  // dispatch 가져오기
  const dispatch = useDispatch();

  return (
    <>
      <div className="container-TIL">
        <div className="header-TIL" style={{ display: "flex", gap: "30px" }}>
          <div>TIL</div>
          <button onClick={() => navigate("/write")}>추가</button>
        </div>
        <hr />
        <div className="list-TIL">
          {listTIL.map((item, index) => (
            <div key={indexedDB} className="item-TIL">
              <div>{item.title}</div>
              <div>{item.content}</div>
              <div>{item.time}</div>
            </div>
          ))}
        </div>
      </div>
      {/* <p>이름 : {store.myself.name}</p>
      <p>나이 : {store.myself.age}</p>
      <button onClick={() => dispatch(changeName("리기동"))}>
        이름 바꾸기
      </button>
      <hr /> */}
    </>
  );
};

export default Home;
