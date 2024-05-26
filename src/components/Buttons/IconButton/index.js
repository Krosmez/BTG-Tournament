import "../button-styles.css";
import "./style.css";

const IconButton = ({ Icon, onClick }) => {
  return (
    <button className="icon-button btn" onClick={onClick}>
      <Icon />
    </button>
  );
};

export default IconButton;
