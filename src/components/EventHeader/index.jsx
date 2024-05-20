import EventName from "./EventName";
import EventLocation from "./EventLocation/index";

import "./style.css";

const EventHeader = ({event}) => {
  return (
    <>
     
        <div className="eventHeader-flex">
          <EventName event={event} />
          <EventLocation event={event}/>
        </div>
 
    </>
  );
};

export default EventHeader;
