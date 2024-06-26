import { useState, useContext } from "react";
import Modal from "react-modal";
import NoBgButton from "../../Buttons/NoBGButton";
import CloseIcon from "@mui/icons-material/Close";
import PrimaryButton from "../../Buttons/PrimaryButton";
import axios from "axios";
import styles from "./style.module.css";
import { AuthContext } from "../../../context/index";

Modal.setAppElement("#root");
const customStyles = {
  content: {
    width: "70%",
    height: "auto",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: { zIndex: 1000 },
};

const CreateEventModal = ({ onClose }) => {
  const [eventName, setEventName] = useState("");
  const [startDateTime, setStartDateTime] = useState("");
  const [endDateTime, setEndDateTime] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [invite, setInvite] = useState("");
  const [error, setError] = useState("");
  const { authToken, userId, username, login, logout } =
    useContext(AuthContext);

  const handleInputChange = (e, setState) => {
    setState(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setIsPrivate(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!eventName || !location || !description) {
      setError("Please fill in all fields");
      return;
    }
    const startDateTimeISO = new Date(startDateTime).toISOString();
    const endDateTimeISO = new Date(endDateTime).toISOString();
    try {
      const response = await axios.post(
        //post event
        "https://capture-it.azurewebsites.net/api/event",
        {
          eventName,
          startDateTime,
          endDateTime,
          location,
          description,
          isPrivate,
          qrCodeUrl: "stirng",
          invite: "stging",
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      // const eventId = response.data.eventId;
      // await axios.post(
      //   `https://capture-it.azurewebsites.net/api/event/${eventId}/participants`,
      //   {
      //     userId: userId, // Assuming userId is the ID of the creator
      //   },
      //   {
      //     headers: {
      //       Authorization: `Bearer ${authToken}`,
      //     },
      //   }
      // );

      // const addParticipantResponse = await axios.post(
      //   `https://capture-it.azurewebsites.net/api/event/participants`,
      //   {
      //     eventId,
      //     username,
      //   },
      //   {
      //     headers: {
      //       Authorization: `Bearer ${authToken}`,
      //     },
      //   }
      // );

      console.log("Event created successfully:", response.data);
      window.location.reload();
      // console.log("User added as a participant:", addParticipantResponse.data);

      onClose(); // Close the modal after successful submission
    } catch (error) {
      console.error("Error creating event: ", error);
    }
  };

  return (
    <>
      <Modal
        isOpen={true}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel="Create Event Modal"
      >
        <div className={styles.closeModalButton}>
          <NoBgButton onClick={onClose} buttonIcon={<CloseIcon />} />
        </div>
        <h1 className={styles.h1style}>Create Event</h1>
        <form onSubmit={handleSubmit} className={styles.addPhotoForm}>
          <div className={styles.inputContainer}>
            <label>
              Event Name:
              <input
                className={styles.pictureInput}
                type="text"
                value={eventName}
                onChange={(e) => handleInputChange(e, setEventName)}
              />
            </label>
          </div>
          <div className={styles.inputContainer}>
            <label>
              Start Date and Time:
              <input
                className={styles.inputEvent}
                type="datetime-local"
                value={startDateTime}
                onChange={(e) => handleInputChange(e, setStartDateTime)}
              />
            </label>
          </div>
          <div className={styles.inputContainer}>
            <label>
              End Date and Time:
              <input
                className={styles.inputEvent}
                type="datetime-local"
                value={endDateTime}
                onChange={(e) => handleInputChange(e, setEndDateTime)}
              />
            </label>
          </div>
          <div className={styles.inputContainer}>
            <label>
              Location:
              <input
                className={styles.pictureInput}
                type="text"
                value={location}
                onChange={(e) => handleInputChange(e, setLocation)}
              />
            </label>
          </div>
          <div className={styles.inputContainer}>
            <label>
              Description:
              <textarea
                className={styles.descriptionInput}
                value={description}
                onChange={(e) => handleInputChange(e, setDescription)}
                rows="4"
              />
            </label>
          </div>

          <div className={styles.inputContainer}>
            <label>
              Private Event:
              <input
                type="checkbox"
                checked={isPrivate}
                onChange={handleCheckboxChange}
                className={styles.inputEvent}
              />
            </label>
          </div>
          {/* <div className={styles.inputContainer}>
            <label>
              QR Code URL:
              <input
                className={styles.input}
                type="text"
                value={qrCodeUrl}
                onChange={(e) => handleInputChange(e, setQrCodeUrl)}
              />
            </label>
          </div>
          <div className={styles.inputContainer}>
            <label>
              Invite:
              <input
                className={styles.input}
                type="text"
                value={invite}
                onChange={(e) => handleInputChange(e, setInvite)}
              />
            </label>
          </div> */}
          {error && <p className={styles.errorMessage}>{error}</p>}
          <hr className={styles.divider} />
          <PrimaryButton
            buttonText="Submit"
            buttonWidth="100%"
            buttonHeight="40px"
            type="submit"
          />
        </form>
      </Modal>
    </>
  );
};

export default CreateEventModal;
