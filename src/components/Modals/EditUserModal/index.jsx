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
  overlay: { zIndex: 1000 },
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
      <h3 className={styles.h1style}>Edit User Info</h3>
      <form onSubmit={handleSubmit} className={styles.editUserForm}>
        <div className={styles.inputContainer}>
          <label>
            <input
              className={styles.inputField}
              type="text"
              name="firstName"
              value={userData.firstName}
              onChange={handleChange}
              placeholder="First Name:"
            />
          </label>
        </div>
        <div className={styles.inputContainer}>
          <label>
            <input
              className={styles.inputField}
              type="text"
              name="lastName"
              value={userData.lastName}
              onChange={handleChange}
              placeholder="Last Name:"
            />
          </label>
        </div>
        <div className={styles.inputContainer}>
          <label>
            <input
              className={styles.inputField}
              type="text"
              name="phoneNumber"
              value={userData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number:"
            />
          </label>
        </div>
        <div className={styles.inputContainer}>
          <label>
            <input
              className={styles.inputField}
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              placeholder="Email:"
            />
          </label>
        </div>
        <div className={styles.inputContainer}>
          <label>
            <input
              className={styles.inputField}
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              placeholder="Password:"
            />
          </label>
        </div>
        <div className={styles.inputContainer}>
          <label>
            Birthday
            <input
              className={styles.inputContainer}
              type="date"
              name="dateOfBirth"
              value={userData.dateOfBirth}
              onChange={handleChange}
              placeholder="Date of Birth:"
            />
          </label>
        </div>
        <div className={styles.inputContainer}>
          <label>
            <select
              className={` inputContainer ${!userData.gender ? " error" : ""}`}
              value={userData.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>
        <div className={styles.inputContainer}>
          <label>
            <input
              className={styles.inputField}
              type="text"
              name="username"
              value={userData.username}
              onChange={handleChange}
              placeholder="Username"
            />
          </label>
        </div>
        <div className={styles.inputContainer}>
          <label>
            <textarea
              className={styles.inputField}
              name="bio"
              value={userData.bio}
              onChange={handleChange}
              placeholder="Bio:"
            ></textarea>
          </label>
        </div>
        <div className={styles.inputContainer}>
          <label>
            <input
              className={styles.inputField}
              type="text"
              name="profilePicture"
              value={userData.profilePicture}
              onChange={handleChange}
              placeholder="Profile Picture URL:"
            />
          </label>
        </div>
        <PrimaryButton
          buttonText="Save Changes"
          buttonWidth="100%"
          buttonHeight="40px"
          type="submit"
          onClick={handleSubmit}
        />

        {error && <div className="error">{error}</div>}
      </form>
    </Modal>
  );
};

export default EditUserModal;
