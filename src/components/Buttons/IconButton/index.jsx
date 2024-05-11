import "./style.css";

const IconButton = ({ buttonText, onClick, buttonWidth, buttonIcon, buttonHeight }) => {
  return (
    <>
      <button
        className="icon-button"
        onClick={onClick}
        style={{ width: buttonWidth, height: buttonHeight}}
      >
        {buttonText}
        {buttonIcon}
      </button>
    </>
  );
};

export default IconButton;
