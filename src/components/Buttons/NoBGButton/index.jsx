import "./style.css";

const NoBgButton = ({ buttonText, onClick, buttonWidth, buttonIcon, buttonHeight }) => {
  return (
    <>
      <button
        className="noBg-button"
        onClick={onClick}
        style={{ width: buttonWidth, height: buttonHeight}}
      >
        {buttonText}
        {buttonIcon}
      </button>
    </>
  );
};

export default NoBgButton;
