import "./style.css";

const PrimaryButton = ({ buttonText, onClick, buttonWidth, buttonIcon, buttonHeight }) => {
  return (
    <>
      <button
        className="primary-button"
        onClick={onClick}
        style={{ width: buttonWidth, height: buttonHeight}}
      >
        {buttonText}
        {buttonIcon}
      </button>
    </>
  );
};

export default PrimaryButton;
