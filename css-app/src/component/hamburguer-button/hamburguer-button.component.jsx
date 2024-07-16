import "./hamburguer-button.styles.css";

const HamburguerButton = ({ togleFunction }) => {
  const hamdleButton = () => {
    togleFunction();
  };
  return (
    <button onClick={hamdleButton} className="toggle-button">
      <span className="toggle-button__bar"></span>
      <span className="toggle-button__bar"></span>
      <span className="toggle-button__bar"></span>
    </button>
  );
};
export default HamburguerButton;
