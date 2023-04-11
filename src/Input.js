import Button from "./Button";

const Input = ({ setText, inputRef }) => {
  return (
    <>
      <input type="text" ref={inputRef} />
      <Button inputRef={inputRef} setText={setText} />
    </>
  );
};

export default Input;
