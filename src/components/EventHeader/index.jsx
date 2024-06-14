import EventName from "./EventName";
import EventLocation from "./EventLocation/index";
import moment from "moment";

import "./style.css";

const EventHeader = ({
  profilePicture,
  username,
  eventName,
  location,
  startDate,
  endDate,
}) => {
  // const startDateTime = toDateTimeString(
  //   startDate,
  //   " dd MMM yy 'at' hh:mm:ss z,E",
  //   "CEST"
  // );
  let startDateTime = moment(startDate).format("MMMM Do YYYY, h:mm:ss a");
  let endDateTime = moment(endDate).format("MMMM Do YYYY, h:mm:ss a");

  return (
    <>
      <div className="eventHeader-flex">
        <EventName
          profilePicture={profilePicture}
          username={username}
          eventName={eventName}
        />
        <EventLocation location={location} />
        <div className="dateTime">
          {startDateTime} - {endDateTime}
        </div>
      </div>
    </>
  );
};

export default EventHeader;
