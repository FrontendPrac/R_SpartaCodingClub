import React, { useEffect } from "react";

const Fetch = () => {
  // 데이터 추가 - POST
  const addSleeptime = async () => {
    const data = { day: "금", sleepTime: "10:00" };
    const response = await fetch("http://localhost:4000/sleep-time", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(data),
    });
    console.log("response: ", response);
  };

  // 데이터 조회 - GET
  const getSleeptime = async () => {
    const response = await fetch("http://localhost:4000/sleep-time");
    console.log("response: ", response);
  };

  useEffect(() => {
    // getSleeptime();
    // addSleeptime();
  }, []);

  return <div>Fetch</div>;
};

export default Fetch;
