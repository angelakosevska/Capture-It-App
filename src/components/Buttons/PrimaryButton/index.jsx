import "./style.css";

const PrimaryButton = ({buttonText, onClick, buttonWidth  })=>{

return(
    <>
    <button className="primary-button" onClick={onClick}
    style={{width: buttonWidth}}
    > {buttonText}</button>
    
    </>
)

}

export default PrimaryButton;

