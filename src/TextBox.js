import React from "react";

const TextBox = ({ text }) => {
  return (
    <div style={{ border: "1px solid black", width: "200px", height: "200px" }}>
      {text}
    </div>
  );
};

export default TextBox;
