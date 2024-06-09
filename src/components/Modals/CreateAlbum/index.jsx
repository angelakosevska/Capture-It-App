import { useState } from "react";
import Modal from "react-modal";
import NoBgButton from "../../Buttons/NoBGButton";
import CloseIcon from "@mui/icons-material/Close";
import PrimaryButton from "../../Buttons/PrimaryButton";
import axios from "axios";
import styles from "./style.module.css";

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

const CreateAlbumModal = ({ onClose, eventId }) => {
  const [newAlbumName, setNewAlbumName] = useState("");
  const [error, setError] = useState("");

  const handleAlbumNameChange = (e) => {
    setNewAlbumName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newAlbumName) {
      setError("Please fill in all fields");
      return;
    }

    try {
      const response = await axios.post(
        //post album
        "https://capture-it.azurewebsites.net/api/album",
        {
          eventId: eventId,
          albumName: { newAlbumName },
        },
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoia29zZXZza2FhIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIxMSIsImV4cCI6MTcxNzg5NDcwM30.BQo93mli5Trtt0AJg1oBcx075kYYR4E4ZWRK1rAXnuo",
          },
        }
      );

      console.log("Album created successfully:", response.data);
      onClose(); // Close the modal after successful submission
    } catch (error) {
      setError("Error creating album: " + error.message);
      console.error("Error creating album:", error);
    }
  };

  return (
    <>
      <Modal
        isOpen={true}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel="Create Album Modal"
      >
        <div className={styles.closeModalButton}>
          <NoBgButton onClick={onClose} buttonIcon={<CloseIcon />} />
        </div>
        <h1 className={styles.h1style}>Create new Album</h1>
        <form onSubmit={handleSubmit} className={styles.addPhotoForm}>
          <div className={styles.inputContainer}>
            <label>
              Album name:
              <input
                className={styles.pictureInput}
                type="text"
                value={newAlbumName}
                onChange={handleAlbumNameChange}
              />
            </label>
          </div>

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

export default CreateAlbumModal;
