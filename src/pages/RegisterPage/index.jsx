import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./style1.css";
import Logo1 from "../../Logo";
import axios from "axios";

const RegisterPage = () => {
  const [name, setName] = useState("");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous error messages
    setSuccess(""); // Clear previous success messages

    if (
      !name ||
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
    }

    try {
      const response = await axios.post(
        "https://capture-it.azurewebsites.net/api/authenticate/register",
        {
          name,
          lastName,
          username,
          email,
          phoneNumber,
          password,
          dateOfBirth,
          gender,
        }
      );
      console.log(response.data.dateOfBirth);
      if (response.data.success) {
        setSuccess("Registration successful! Redirecting to login...");
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      } else {
        setError("Registration failed. Please try again.");
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code outside of the range of 2xx
        setError(
          `Registration failed: ${
            error.response.data.message || error.response.statusText
          }`
        );
        console.error("Registration error:", error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        setError(
          "Registration failed: No response from server. Please try again later."
        );
        console.error("Registration error:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        setError(
          "Registration failed: An unexpected error occurred. Please try again."
        );
        console.error("Registration error:", error.message);
      }
    }
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
              placeholder="Name"
              className={`input-field half-width${!name ? " error" : ""}`}
              value={name}
              onChange={(e) => setName(e.target.value)}
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
            onChange={(e) => setDateOfBirth(e.target.value)}
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
