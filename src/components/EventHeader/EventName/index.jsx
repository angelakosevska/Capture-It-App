import "./style.css";
import PictureAndUsername
 from "../../PictureAndUsername";
const EventName =({userName, eventName})=>{
return(
    <>
    <div><PictureAndUsername {userName,, }/> 's {eventName}</div>
    
    </>
)


}