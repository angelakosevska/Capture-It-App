import EventName from "./EventName";
import EventLocation from "./EventLocation/index";

import "./style.css";

const EventHeader = () => {
  return (
    <>
     
        <div className="eventHeader-flex">
          <EventName />
          <EventLocation />
        </div>
 
    </>
  );
};

export default EventHeader;
