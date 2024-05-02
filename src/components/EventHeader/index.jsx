import EventName from "./EventName";
import EventLocation from "./EventLocation/index";
import EventPostedAgo from "./EventPostedAgo/index";
import SearchAlbums from "./SearchAlbums";
import InvitePeople from "./InvitePeople";

import "./style.css";
const EventHeader =() =>{

    return(
        <>
        <div className="eventHeader-flex">   <EventName/><EventLocation/></div>
     
       
       
        </>
    )
}

export default EventHeader;