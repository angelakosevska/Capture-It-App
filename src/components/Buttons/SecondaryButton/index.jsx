import "./style.css";

const SecondaryButton =({buttonText, onClick, buttonWidth, buttonHeight, buttonIcon, })=>{


    return(
        <>
        <button 
        className="secondary-button"
        onClick={onClick}
        style={{width: buttonWidth, height:buttonHeight, }}>
            {buttonText}{buttonIcon}
        </button>
        
        </>
    )
}
export default SecondaryButton;