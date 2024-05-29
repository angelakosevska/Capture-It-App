import "./style.css";

const EventLocation = ({ location }) => {
  return (
    <>
      <div className="event-location">
        <span class="material-symbols-outlined">location_on </span>
        &#160;{location} &#160;
      </div>
    </>
  );
};

export default EventLocation;
