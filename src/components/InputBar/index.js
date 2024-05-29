import "./style.css";

const InputBar = ({ inputs, setInputs }) => {
  const handleInputChange = (index, event) => {
    const values = [...inputs];
    values[index] = event.target.value;
    setInputs(values);
  };

  return (
    <div className="input-bar">
      <div className="input-bar-container">
        {inputs.map((input, i) => (
          <input
            key={i}
            className="input-bar-player"
            value={input}
            onChange={(e) => {
              handleInputChange(i, e);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default InputBar;
