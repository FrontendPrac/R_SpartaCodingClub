import { useNavigate, useParams } from "react-router-dom";

const Myself = () => {
  const params = useParams();
  const navigate = useNavigate();

  console.log("params: ", params);

  return (
    <>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home 페이지로 이동하기
      </button>
    </>
  );
};

export default Myself;
