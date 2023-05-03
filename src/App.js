import { createContext, useContext, useState } from "react";

function App() {
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
  );
}

export default App;
