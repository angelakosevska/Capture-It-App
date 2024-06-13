import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";
import styles from "./style.module.css";
import NoBgButton from "../../Buttons/NoBGButton";
import CloseIcon from "@mui/icons-material/Close";
import PrimaryButton from "../../Buttons/PrimaryButton";
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

const EditUserModal = ({ onClose }) => {
  const { authToken, userId, username } = useContext(AuthContext);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    dateOfBirth: "",
    gender: "",
    username: "",
    bio: "",
    profilePicture: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch user details when component mounts
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `https://capture-it.azurewebsites.net/api/user`, // Adjust endpoint to fetch user details
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        const {
          firstName,
          lastName,
          phoneNumber,
          email,
          dateOfBirth,
          gender,
          username,
          bio,
          profilePicture,
        } = response.data;
        setUserData({
          firstName,
          lastName,
          phoneNumber,
          email,
          dateOfBirth: formatDate(dateOfBirth),
          gender,
          username,
          bio,
          profilePicture,
        });
      } catch (error) {
        setError("Error fetching user: " + error.message);
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [authToken]);

  const formatDate = (dateStr) => {
    // Format date string for input field (yyyy-MM-dd)
    return dateStr ? dateStr.slice(0, 10) : "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `https://capture-it.azurewebsites.net/api/user/${userId}`, // Adjust endpoint to update user details
        userData,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      console.log("User updated successfully:", response.data);
      onClose();
      window.location.reload(); // Consider a better way to refresh user data
    } catch (error) {
      setError("Error updating user: " + error.message);
      console.error("Error updating user:", error);
    }
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Edit User Modal"
    >
      <div className={styles.closeModalButton}>
        <NoBgButton onClick={onClose} buttonIcon={<CloseIcon />} />
      </div>
      <h1 className={styles.h1style}>Edit Profile</h1>
      <form onSubmit={handleSubmit} className={styles.editUserForm}>
        <div className={styles.inputContainer}>
          <label>
            First Name:
            <input
              className={styles.inputField}
              type="text"
              name="firstName"
              value={userData.firstName}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={styles.inputContainer}>
          <label>
            Last Name:
            <input
              className={styles.inputField}
              type="text"
              name="lastName"
              value={userData.lastName}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={styles.inputContainer}>
          <label>
            Phone Number:
            <input
              className={styles.inputField}
              type="text"
              name="phoneNumber"
              value={userData.phoneNumber}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={styles.inputContainer}>
          <label>
            Email:
            <input
              className={styles.inputField}
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={styles.inputContainer}>
          <label>
            Password:
            <input
              className={styles.inputField}
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={styles.inputContainer}>
          <label>
            Date of Birth:
            <input
              className={styles.inputField}
              type="date"
              name="dateOfBirth"
              value={userData.dateOfBirth}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={styles.inputContainer}>
          <label>
            Gender:
            <input
              className={styles.inputField}
              type="text"
              name="gender"
              value={userData.gender}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={styles.inputContainer}>
          <label>
            Username:
            <input
              className={styles.inputField}
              type="text"
              name="username"
              value={userData.username}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={styles.inputContainer}>
          <label>
            Bio:
            <textarea
              className={styles.bioInput}
              name="bio"
              value={userData.bio}
              onChange={handleChange}
            ></textarea>
          </label>
        </div>
        <div className={styles.inputContainer}>
          <label>
            Profile Picture URL:
            <input
              className={styles.inputField}
              type="text"
              name="profilePicture"
              value={userData.profilePicture}
              onChange={handleChange}
            />
          </label>
        </div>
        <PrimaryButton
          buttonText="Save Changes"
          buttonWidth="100%"
          buttonHeight="40px"
          type="submit"
        />

        {error && <div className="error">{error}</div>}
      </form>
    </Modal>
  );
};

export default EditUserModal;
