import { useEffect } from "react";

const Sleeptime = () => {
  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:4000/sleep-time");
    xhr.send();

    // onreadystatechange
    xhr.onreadystatechange = function () {
      // console.log("xhr.readyState: ", xhr.readyState);
      if (xhr.readyState === 4) {
        // console.log("xhr.responseText", xhr.responseText);
        console.log("onreadystatechange로 API 응답 받기 성공!");
      }
    };

    // onload
    xhr.onload = function () {
      // console.log("xhr.responseText", xhr.responseText);
      console.log("onload로 API 응답 받기 성공!");
    };
  });

  return <div>Sleeptime</div>;
};

export default Sleeptime;
