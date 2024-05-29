import "./style.css";

import { useState } from "react";

import Button from "../../Buttons/BaseButton";
import InputBar from "../../InputBar";
import ModalBase from "../index";
import useModal from "../../../hooks/useModal";
import useStorage from "../../../hooks/useStorage";
import { ReactComponent as CrossIcon } from "../../../assets/svg/cross.svg";

const CreatePoolModal = () => {
  const { closeModal } = useModal();
  const { setItem } = useStorage();
  const [inputs, setInputs] = useState([]);

  const addInput = () => {
    setInputs([...inputs, ""]);
  };

  const handleSave = () => {
    setItem("poolData", { players: inputs });
  };

  return (
    <ModalBase modalTitle="Création de pool" className="pool-create-modal">
      <InputBar inputs={inputs} setInputs={setInputs} />
      <div className="input-tools">
        <Button
          className="add-player"
          text="Ajout de joueur"
          Icon={CrossIcon}
          onClick={addInput}
        />
        <Button
          className="save-btn"
          text="Sauvegarder"
          onClick={() => {
            handleSave();
            closeModal();
          }}
        />
      </div>
    </ModalBase>
  );
};

export default CreatePoolModal;
