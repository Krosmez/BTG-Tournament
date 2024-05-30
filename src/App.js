import "./App.css";

import { useEffect, useState } from "react";

import CreatePoolModal from "./components/Modals/CreatePoolModal";
import PoolCreateButton from "./components/Buttons/PoolCreateButton";
import RoundRobin from "./components/RoundRobin";
import useModal from "./hooks/useModal";
import useStorage from "./hooks/useStorage";

function App() {
  const { openModal } = useModal();
  const { getItem, setPoolData, poolData } = useStorage();

  useEffect(() => {
    setPoolData(getItem("poolData"));
    console.log(poolData);
  }, []);

  return (
    <div className="app">
      <PoolCreateButton
        onClick={() => {
          openModal(<CreatePoolModal />);
        }}
      />
      <RoundRobin />
    </div>
  );
}

export default App;
