import React from "react";

const Button = ({ inputRef, setText }) => {
  const onClickHandler = () => {
    setText(inputRef.current.value);
    inputRef.current.value = "";
  };

  return <button onClick={onClickHandler}>완성</button>;
};

export default Button;
