import TextBox from "./TextBox";
import Input from "./Input";
import { useInput } from "./useInput";

function App() {
  const [text, setText, inputRef] = useInput("");

  return (
    <div className="App" style={{ display: "flex", gap: "10px" }}>
      <TextBox text={text} />
      <Input setText={setText} inputRef={inputRef} />
    </div>
  );
}

export default App;
