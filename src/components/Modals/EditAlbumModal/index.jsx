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

const EditAlbumModal = ({ onClose }) => {
  const [albumName, setAlbumName] = useState("");
  const [error, setError] = useState("");
  const { albumId } = useParams();

  const handleChange = (e) => {
    setAlbumName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedAlbumData = {
      albumName: albumName,
    };

    try {
      const response = await axios.put(
        //put album
        `https://capture-it.azurewebsites.net/api/album/1`,
        updatedAlbumData,
        {
          headers: {
            Authorization:
              "Bearer  eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoia29zZXZza2FhIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIxMSIsImV4cCI6MTcxNzkzNjU1N30.CZHI51ebhVDDWsilsKOnueb_NbNYg8_OVyfFsE8ReTs",
          },
        }
      );

      console.log("Album updated successfully:", response.data);
      onClose();
      window.location.reload();
      // Close the modal after successful update
    } catch (error) {
      setError("Error updating album: " + error.message);
      console.error("Error updating album:", error);
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
        <h1 className={styles.h1style}>Edit your album</h1>
        <form onSubmit={handleSubmit} className={styles.addPhotoForm}>
          <div className={styles.inputContainer}>
            <label>
              Album Name:
              <input
                className={styles.pictureInput}
                type="text"
                value={albumName}
                onChange={handleChange}
                required
              />
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

export default EditAlbumModal;
