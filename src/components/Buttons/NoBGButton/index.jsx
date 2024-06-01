import "./style.css";

const NoBgButton = ({ buttonText, onClick, buttonWidth, buttonIcon, buttonHeight, onPrev, onNext }) => {
  return (
    <>
      <button
        className="noBg-button"
        onClick={onClick}
        style={{ width: buttonWidth, height: buttonHeight}}
        onPrev={onPrev}
        onNext={onNext}
      >
        {buttonText}
        {buttonIcon}
      </button>
    </>
  );
};

export default NoBgButton;
