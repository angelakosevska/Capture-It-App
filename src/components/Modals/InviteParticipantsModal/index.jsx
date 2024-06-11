import { useState, useContext } from "react";
import Modal from "react-modal";
import NoBgButton from "../../Buttons/NoBGButton";
import CloseIcon from "@mui/icons-material/Close";
import PrimaryButton from "../../Buttons/PrimaryButton";
import axios from "axios";
import styles from "./style.module.css";
import { AuthContext } from "../../../context";

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

const InviteParticipantsModal = ({ onClose, eventId, fetchParticipants }) => {
  const { authToken, userId, username, login, logout } =
    useContext(AuthContext);

  const [inviteUserName, setInviteUserName] = useState("");
  const [error, setError] = useState("");

  const handleInvite = (e) => {
    setInviteUserName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inviteUserName) {
      setError("Please add a username");
      return;
    }

    try {
      const response = await axios.post(
        //post album
        "https://capture-it.azurewebsites.net/api/event/participants",
        {
          eventId: eventId,
          username: inviteUserName,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      fetchParticipants();

      console.log("Participant invited successfully:", response.data);
      onClose();
      //  window.location.reload();
    } catch (error) {
      setError("Error inviting participant " + error.message);
      console.error("Error inviting participant:", error);
    }
  };

  return (
    <>
      <Modal
        isOpen={true}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel="Invite participant"
      >
        <div className={styles.closeModalButton}>
          <NoBgButton onClick={onClose} buttonIcon={<CloseIcon />} />
        </div>
        <h1 className={styles.h1style}>Invite people to your event</h1>
        <form onSubmit={handleSubmit} className={styles.addPhotoForm}>
          <div className={styles.inputContainer}>
            <label>
              Username:
              <input
                className={styles.pictureInput}
                type="text"
                value={inviteUserName}
                onChange={handleInvite}
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

export default InviteParticipantsModal;
