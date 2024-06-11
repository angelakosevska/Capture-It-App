import styles from "./style.module.css";

const PrimaryButton = ({
  buttonText,
  onClick,
  buttonWidth,
  buttonIcon,
  buttonHeight,
}) => {
  return (
    <>
      <button
        className={styles.primaryButton}
        onClick={onClick}
        style={{ width: buttonWidth, height: buttonHeight }}
      >
        {buttonText}
        {buttonIcon}
      </button>
    </>
  );
};

export default PrimaryButton;
