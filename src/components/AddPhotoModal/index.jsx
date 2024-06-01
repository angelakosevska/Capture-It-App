import { useState } from "react";
import Modal from "react-modal";
import NoBgButton from "../Buttons/NoBGButton";
import CloseIcon from "@mui/icons-material/Close";
import PrimaryButton from "../Buttons/PrimaryButton";
import axios from "axios";
import styles from "./style.module.css";

Modal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const AddPhotoModal = ({ onClose }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleImageChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageUrl || !description) {
      setError("Please fill in all fields");
      return;
    }

    try {
      const response = await axios.post(
        "https://captureit.azurewebsites.net/api/picture",
        {
          albumId: 15,
          authorId: 10,
          imageUrl, // Send the image URL directly
          createdAt: new Date().toISOString(),
          description,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoia29zZXZza2FhIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIxMCIsImV4cCI6MTcxNzI0OTk2NX0.V8KAfkJRWbLNrBTX_ufVZYgUriTTskxMgjuFbLfkfPk", // Replace with your authorization token
          },
        }
      );

      console.log("Picture uploaded successfully:", response.data);
      onClose(); // Close the modal after successful submission
    } catch (error) {
      setError("Error uploading picture: " + error.message);
      console.error("Error uploading picture:", error);
    }
  };

  return (
    <>
      <Modal
        isOpen={true}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel="Add Photo Modal"
      >
        <div className={styles.closeModalButton}>
          <NoBgButton onClick={onClose} buttonIcon={<CloseIcon />} />
        </div>

        <form onSubmit={handleSubmit} className={styles.addPhotoForm}>
          <div className={styles.inputContainer}>
            <label>
              Image URL:
              <input
                className={styles.pictureInput}
                type="text"
                value={imageUrl}
                onChange={handleImageChange}
              />
            </label>
          </div>
          <div className={styles.inputContainer}>
            <label>
              Describe your picture:
              <textarea
                className={styles.descriptionInput}
                value={description}
                onChange={handleDescriptionChange}
                rows="4"
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

export default AddPhotoModal;
