import TextBox from "./TextBox";
import Input from "./Input";
import { useInput } from "./useInput";
import { createContext, useContext, useState } from "react";

function App() {
  // custom Hook
  const [text, setText, inputRef] = useInput("");

  // context API
  const [name, setName] = useState("kidongg");
  const MyStore = createContext();

  // useContext component
  const MyStoreConsumer = () => {
    const { name, setName } = useContext(MyStore);
    return (
      <>
        <h2>{name}</h2>
        <button onClick={() => setName("기동")}>버튼</button>
      </>
    );
  };

  return (
    <>
      <MyStore.Provider value={{ name: name, setName: setName }}>
        <MyStoreConsumer />
      </MyStore.Provider>
    </>
    // custom Hook
    // <div className="App" style={{ display: "flex", gap: "10px" }}>
    //   <TextBox text={text} />
    //   <Input setText={setText} inputRef={inputRef} />
    // </div>
  );
}

export default App;
