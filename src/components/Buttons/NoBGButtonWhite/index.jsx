
import "./style.css";

const NoBgButton = ({
  buttonText,
  onClick,
  buttonWidth,
  buttonIcon,
  buttonHeight,
  onPrev,
  onNext,
}) => {
  return (
    <>
      <button
        className="noBg-button-White"
        onClick={onClick}
        style={{ width: buttonWidth, height: buttonHeight }}
        onPrev={onPrev}
        onNext={onNext}
      >
        {buttonIcon}
        {buttonText}
      </button>
    </>
  );
};

export default NoBgButton;
