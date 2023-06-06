import axios from "axios";
import { useEffect, useState } from "react";

const HomeworkTIL = () => {
  const [til, setTil] = useState([]); // TIL 상태관리

  // API 호출 함수
  const getTIL = async () => {
    const response = await axios.get("http://localhost:4000/til");
    console.log("response.data: ", response.data);
    setTil(response.data);
  };

  // TIL 추가 버튼
  const onClickAddTIL = () => {
    console.log("TIL 추가");
    axios.post("http://localhost:4000/til", {
      id: til.length,
      title: `제목${til.length + 1}`,
      content: `내용${til.length + 1}`,
      time: "10:00",
    });
  };

  // API 호출
  useEffect(() => {
    getTIL();
  }, []);

  console.log("til: ", til);

  return (
    <div className="Container" style={{ width: 400 }}>
      <div
        className="header"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div style={{ fontSize: 30 }}>TIL</div>
        <div
          style={{
            backgroundColor: "blue",
            borderRadius: "50%",
            width: 50,
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={onClickAddTIL}
        >
          추가
        </div>
      </div>
      {/* 맵돌리기 */}
      {til.map((item) => (
        <div
          className="body"
          style={{
            border: "solid black 1px",
            marginTop: 20,
            padding: 20,
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
          key={item.id}
        >
          <div>{item.title}</div>
          <div>{item.content}</div>
          <div>{item.time}</div>
        </div>
      ))}
    </div>
  );
};

export default HomeworkTIL;
