import "./style.css";

import Button from "../BaseButton";

const PoolCreateButton = ({ Icon, onClick }) => {
  return (
    <Button
      text="Créer une pool"
      className="pool-create-button"
      onClick={onClick}
      Icon={Icon}
    />
  );
};

export default PoolCreateButton;
