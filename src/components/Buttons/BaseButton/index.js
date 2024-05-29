import "./style.css";

/**
 * Basic Button component.
 *
 * @param {string} text - The text to display on the button.
 * @param {string} className - The class to add to the button.
 * @param {React.Component} Icon - The icon to display on the button.
 * @param {function} onClick - The function to call when the button is clicked.
 * @returns {React.Component} The rendered button component.
 */
const Button = ({ text, className, Icon, onClick }) => {
  return (
    <button
      className={`btn ${Icon && !text ? " icon-button" : ""} ${
        className ? className : ""
      }`}
      onClick={onClick}
    >
      {text && text} {Icon && <Icon />}
    </button>
  );
};

export default Button;
