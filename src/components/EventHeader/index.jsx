import EventName from "./EventName";
import EventLocation from "./EventLocation/index";

import "./style.css";

const EventHeader = ({ profilePicture, username, eventName, location }) => {
  return (
    <>
      <div className="eventHeader-flex">
        <EventName
          profilePicture={profilePicture}
          username={username}
          eventName={eventName}
        />
        <EventLocation location={location} />
      </div>
    </>
  );
};

export default EventHeader;
