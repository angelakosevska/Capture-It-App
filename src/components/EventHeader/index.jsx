import EventName from "./EventName";
import EventLocation from "./EventLocation/index";
import EventPostedAgo from "./EventPostedAgo/index";
import SearchAlbums from "./SearchAlbums";
import InvitePeople from "./InvitePeople";

import "./style.css";
import EventDescription from "./EventDescription";
const EventHeader = () => {
  return (
    <>    <div className="event-header">
      <div className="eventHeader-flex">
        <EventName />
        <EventLocation />
       
      </div>
  
      <EventDescription />
      </div>
    </>
  );
};

export default EventHeader;
