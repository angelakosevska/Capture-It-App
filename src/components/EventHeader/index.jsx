import EventName from "./EventName";
import EventLocation from "./EventLocation/index";

import "./style.css";

const EventHeader = ({
  profilePicture,
  username,
  eventName,
  location,
  startDate,
  endDate,
}) => {
  return (
    <>
      <div className="eventHeader-flex">
        <EventName
          profilePicture={profilePicture}
          username={username}
          eventName={eventName}
        />
        <EventLocation location={location} />
        <div className="dateTime">{startDate} - {endDate}</div>
        
      </div>
    </>
  );
};

export default EventHeader;
