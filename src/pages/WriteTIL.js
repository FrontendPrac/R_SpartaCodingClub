import { useRef } from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/modules/tilSlice";
import { useNavigate } from "react-router-dom";

const WriteTIL = ({ listTIL, setListTIL }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const titleRef = useRef();
  const contentRef = useRef();
  const timeRef = useRef();

  // 상태를 변경하는 함수
  const onClickAddTIL = () => {
    // 추가할 데이터
    const addData = {
      title: titleRef.current.value,
      content: contentRef.current.value,
      time: timeRef.current.value,
    };
    console.log("addData: ", addData);
    // setListTIL([...listTIL, addData]);
    dispatch(add(addData));
    navigate(-1);
  };

  return (
    <div className="container-writeTIL">
      <div>
        <span>과목</span>
        <input type="text" ref={titleRef} />
      </div>
      <div>
        <span>내용</span>
        <input type="text" ref={contentRef} />
      </div>
      <div>
        <span>시간</span>
        <input type="text" ref={timeRef} />
      </div>
      <button onClick={onClickAddTIL}>추가하기</button>
    </div>
  );
};

export default WriteTIL;
