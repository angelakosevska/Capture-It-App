import "./style.css";
import PictureAndUsername from "../../PictureAndUsername";

const EventName = ({event}) => {

  return (
    <>
      <div className="eventName">
        <PictureAndUsername textColor={"black"} ppDimension={"40px"} event={event} />'s birthday
      </div>
    </>
  );
};

export default EventName;
