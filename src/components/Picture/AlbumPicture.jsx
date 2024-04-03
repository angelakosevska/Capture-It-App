
import {PPandUN} from "../PPandUN/PPandUN";
import "./AlbumPicture.css";

export function AlbumPicture(){
    return(
    <>
    <div className="AlbumName"><h1>Album name</h1></div>

<div> <img src="https://images.pexels.com/photos/6794043/pexels-photo-6794043.jpeg?cs=srgb&dl=pexels-leeloo-the-first-6794043.jpg&fm=jpg" alt="SLika"/> </div>
<div id="overlay">
      <PPandUN/>
</div>


  
     </>

)
}
export default AlbumPicture;