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
              "Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoia29zZXZza2FhIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIxMSIsImV4cCI6MTcxNzkzMDU3NX0.d1Zjt72erpjY70vRq01FiaeY_tLcedLPFaDer0g6XX0",
          },
        }
      );

      console.log("Album updated successfully:", response.data);
      onClose(); // Close the modal after successful update
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

// import { useEffect, useState } from "react";
// import Modal from "react-modal";
// import NoBgButton from "../../Buttons/NoBGButton";
// import CloseIcon from "@mui/icons-material/Close";
// import PrimaryButton from "../../Buttons/PrimaryButton";
// import axios from "axios";
// import styles from "./style.module.css";
// import { useParams } from "react-router-dom";

// Modal.setAppElement("#root");
// const customStyles = {
//   content: {
//     width: "50%",
//     height: "auto",
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
// };

// const EditAlbumModal = ({ onClose }) => {
//   const [albumNewName, setAlbumNewName] = useState("");
//   const [error, setError] = useState(null);
//   const { albumId } = useParams();

//   const handleInput = (event) => {
//     setAlbumNewName(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {

//       const result = await axios.put(
//         `https://captureit.azurewebsites.net/api/album/${albumId}`,

//         {
//           headers: {
//             Authorization:
//               "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoia29zZXZza2FhIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIxMSIsImV4cCI6MTcxNzY3NTczMH0.MEPXqGZ9SquOWePUY8n3h53R_YQ6OoPAVg3Gkzc5USg",
//           },{albumName: albumNewName,
//             updatedAt: new Date().toISOString(),
//             updatedBy: 10,}
//         }
//       );

//       if (result.status === 200) {
//         onClose();
//       }
//     } catch (error) {
//       const errorMessage =
//         error.response?.data?.message || "An unknown error has occurred";
//       setError(errorMessage);
//       console.error("error editing Album: ", error);
//     }
//   };
//   return (
//     <>
//       <Modal
//         isOpen={true}
//         onRequestClose={onClose}
//         style={customStyles}
//         contentLabel="Edit Album Modal"
//       >
//         <div className={styles.closeModalButton}>
//           <NoBgButton onClick={onClose} buttonIcon={<CloseIcon />} />
//         </div>
//         <h1 className={styles.h1style}>Edit your Album</h1>
//         <form onSubmit={handleSubmit} className={styles.addPhotoForm}>
//           <div className={styles.inputContainer}>
//             <label>
//               Album name:
//               <input
//                 className={styles.pictureInput}
//                 type="text"
//                 value={albumNewName}
//                 onChange={handleInput}
//               />
//             </label>
//           </div>
//           <div className={styles.inputContainer}></div>
//           {error && <p className={styles.errorMessage}>{error}</p>}
//           <hr className={styles.divider} />
//           <PrimaryButton
//             buttonText="Submit"
//             buttonWidth="100%"
//             buttonHeight="40px"
//             type="submit"
//           />
//         </form>
//       </Modal>
//     </>
//   );
// };

// export default EditAlbumModal;
