import React, { useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import { useParams } from "react-router-dom";
import styles from "./style.module.css";
import NoBgButton from "../../Buttons/NoBGButton";
import CloseIcon from "@mui/icons-material/Close";
import PrimaryButton from "../../Buttons/PrimaryButton";

Modal.setAppElement("#root");
const customStyles = {
  content: {
    width: "50%",
    height: "auto",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const EditEventModal = ({ onClose }) => {
  const [eventName, setEventName] = useState("");
  const [startDateTime, setStartDateTime] = useState("");
  const [endDateTime, setEndDateTime] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const { eventId } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "eventName") {
      setEventName(value);
    } else if (name === "startDateTime") {
      setStartDateTime(value);
    } else if (name === "endDateTime") {
      setEndDateTime(value);
    } else if (name === "location") {
      setLocation(value);
    } else if (name === "description") {
      setDescription(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedEventData = {
      eventName: eventName,
      startDateTime: startDateTime,
      endDateTime: endDateTime,
      location: location,
      description: description,
    };

    try {
      const response = await axios.put(
        //put album
        `https://capture-it.azurewebsites.net/api/event/${eventId}`,
        updatedEventData,
        {
          headers: {
            Authorization:
              "Bearer  eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoia29zZXZza2FhIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIxMSIsImV4cCI6MTcxODA3MjUwOX0.IvJinZZTobJi7UvdvwHhg2rylOBhPOO2ZpJEFRAc8aE",
          },
        }
      );

      console.log("Event updated successfully:", response.data);
      onClose();
      window.location.reload();
      // Close the modal after successful update
    } catch (error) {
      setError("Error updating event: " + error.message);
      console.error("Error updating event:", error);
    }
  };

  return (
    <>
      <Modal
        isOpen={true}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel="Edit Album Modal"
      >
        <div className={styles.closeModalButton}>
          <NoBgButton onClick={onClose} buttonIcon={<CloseIcon />} />
        </div>
        <h1 className={styles.h1style}>Edit event</h1>
        <form onSubmit={handleSubmit} className={styles.addPhotoForm}>
          <div className={styles.inputContainer}>
            <label>
              Event Name:
              <input
                className={styles.inputField}
                type="text"
                name="eventName"
                value={eventName}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className={styles.inputContainer}>
            <label>
              Start Date and Time:
              <input
                className={styles.inputField}
                type="datetime-local"
                name="startDateTime"
                value={startDateTime}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className={styles.inputContainer}>
            <label>
              End Date and Time:
              <input
                className={styles.inputField}
                type="datetime-local"
                name="endDateTime"
                value={endDateTime}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className={styles.inputContainer}>
            <label>
              Location:
              <input
                className={styles.inputField}
                type="text"
                name="location"
                value={location}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className={styles.inputContainer}>
            <label>
              Description:
              <textarea
                className={styles.descriptionInput}
                name="description"
                value={description}
                onChange={handleChange}
              ></textarea>
            </label>
          </div>
          <PrimaryButton
            buttonText="Submit"
            buttonWidth="100%"
            buttonHeight="40px"
            type="submit"
          />

          {error && <div className="error">{error}</div>}
        </form>
      </Modal>
    </>
  );
};

export default EditEventModal;
