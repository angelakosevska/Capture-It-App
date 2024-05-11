import "./style.css";
import PictureAndUsername from "../../PictureAndUsername";

const EventName = () => {

  return (
    <>
      <div className="eventName">
        <PictureAndUsername textColor={"black"} ppDimension={"40px"} username={"@Abgela"} />'s birthday
      </div>
    </>
  );
};

export default EventName;
