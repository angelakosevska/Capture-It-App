import { useState, useContext } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./style1.css";
import Logo1 from "../../Logo";
import axios from "axios";
import { AuthContext } from "../../context/index";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { authToken, userId, login, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !firstName ||
      !lastName ||
      !username ||
      !email ||
      !password ||
      !repeatPassword ||
      !dateOfBirth ||
      !gender
    ) {
      setError("Please fill out all required fields.");
    } else if (password !== repeatPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(
        "https://capture-it.azurewebsites.net/api/authenticate/register",
        {
          firstName,
          lastName,
          username,
          email,
          phoneNumber,
          password,
          dateOfBirth,
          gender,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      navigate(`/login`);
    } catch (error) {
      console.error(" error register,", error);
    }
  };
  const handleDateChange = (e) => {
    // Format the date value to YYYY-MM-DD
    const rawDate = e.target.value; // Get the raw date string from the input
    const [year, month, day] = rawDate.split("-"); // Split the raw date string by "-"
    const formattedDate = `${year}-${month}-${day}`;
    setDateOfBirth(formattedDate);
  };
  return (
    <div className="register-container">
      <div className="register-box">
        <div className="Logo1">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Logo1 />
          </svg>
          <div className="Logo1Text">Welcome to Capture It</div>
        </div>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="First name"
              className={`input-field half-width${!firstName ? " error" : ""}`}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              className={`input-field half-width${!lastName ? " error" : ""}`}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <input
            type="text"
            placeholder="Username"
            className={`input-field${!username ? " error" : ""}`}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className={`input-field${!email ? " error" : ""}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Phone Number (Optional)"
            className="input-field"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            type="date"
            placeholder="Date of Birth"
            className={`input-field${!dateOfBirth ? " error" : ""}`}
            value={dateOfBirth}
            onChange={handleDateChange}
          />
          <select
            className={`input-field${!gender ? " error" : ""}`}
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <input
            type="password"
            placeholder="Create Password"
            className={`input-field${!password ? " error" : ""}`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Repeat Password"
            className={`input-field${!repeatPassword ? " error" : ""}`}
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
          <button type="submit" className="login-button">
            Register
          </button>
        </form>
        <div className="login-text">
          Already have an account? <a href="/login">Login</a>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
