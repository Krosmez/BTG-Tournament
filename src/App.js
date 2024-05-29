import "./App.css";

import CreatePoolModal from "./components/Modals/CreatePoolModal";
import PoolCreateButton from "./components/Buttons/PoolCreateButton";
import useModal from "./hooks/useModal";

function App() {
  const { openModal } = useModal();
  return (
    <div className="app">
      <PoolCreateButton
        onClick={() => {
          openModal(<CreatePoolModal />);
        }}
      />
    </div>
  );
}

export default App;
