import TextBox from "./TextBox";
import Input from "./Input";
import { useState, useRef } from "react";

function App() {
  const [text, setText] = useState("");
  const inputRef = useRef();

  return (
    <div className="App" style={{ display: "flex", gap: "10px" }}>
      <TextBox text={text} />
      <Input setText={setText} inputRef={inputRef} />
    </div>
  );
}

export default App;
