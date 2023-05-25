import axios from "axios";
import React from "react";

const HomeworkAPI = () => {
  // axios
  const axiosAPI = async () => {
    const response = await axios.get("http://localhost:4000/ping");
    console.log("response: ", response);
    const data = response.data;
    alert(data[0]);
  };

  // fetch
  const fetchAPI = async () => {
    const response = await fetch("http://localhost:4000/ping");
    console.log("response: ", response);
    const data = await response.json();
    alert(data[0]);
  };

  // XMLhttp
  const XMLhttpAPI = () => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "http://localhost:4000/ping");
    xhr.send();
    xhr.onload = function () {
      const response = JSON.parse(xhr.responseText);
      console.log("response: ", response);
      const data = response[0];
      alert(data);
    };
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <div>
        <button onClick={XMLhttpAPI}>XMLhttp Ping</button>
      </div>
      <div>
        <button onClick={fetchAPI}>fetch Ping</button>
      </div>
      <div>
        <button onClick={axiosAPI}>axios Ping</button>
      </div>
    </div>
  );
};

export default HomeworkAPI;
