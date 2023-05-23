import axios from "axios";
import React, { useEffect } from "react";

const Axios = () => {
  // 데이터 추가 - POST
  const addSleeptime = () => {
    const data = {
      days: "토",
      sleepTime: "10:00",
    };
    axios.post("http://localhost:4000/sleep-time", data).then((response) => {
      console.log("response: ", response);
    });
  };

  // 데이터 조회 - GET
  // method를 통해 사용하는 방법
  const getSleeptimeByMethod = () => {
    axios.get("http://localhost:4000/sleep-time").then((response) => {
      console.log("response: ", response);
    });
  };

  // 데이터 조회 - GET
  // config를 통해 사용하는 방법
  const getSleeptimeByConfig = () => {
    axios({
      method: "get",
      url: "http://localhost:4000/sleep-time",
    }).then((response) => {
      console.log("response: ", response);
    });
  };

  useEffect(() => {
    // getSleeptimeByConfig();
    // getSleeptimeByMethod();
    addSleeptime();
  }, []);
  return <div>Axios</div>;
};

export default Axios;
