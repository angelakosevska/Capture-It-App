import "./style.css";
import PictureAndUsername from "../../PictureAndUsername";

const EventName = ({ profilePicture, username, eventName }) => {
  return (
    <>
      <div className="eventName">
        <PictureAndUsername
          textColor={"black"}
          ppDimension={"40px"}
          profilePic={profilePicture}
          username={username}
        />
        {eventName} &#160;
      </div>
    </>
  );
};

export default EventName;
