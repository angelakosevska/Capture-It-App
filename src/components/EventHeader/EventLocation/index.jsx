import "./style.css";


const EventLocation = ({event}) => {
  return (
    <>
      <div className="event-location">
        <span class="material-symbols-outlined">location_on</span> {event.location}
      </div>
    </>
  );
};

export default EventLocation;
