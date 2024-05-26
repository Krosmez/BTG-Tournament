import "../button-styles.css";
import "./style.css";

const PoolCreateButton = ({ Icon, onClick }) => {
  return (
    <button className="pool-create-button btn" onClick={onClick}>
      Créer une pool {Icon && <Icon />}
    </button>
  );
};

export default PoolCreateButton;
