import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(
    localStorage.getItem("authToken") || null
  );
  const [userId, setUserId] = useState(null);
  const [username, setUsername] = useState(null);


  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const storedUserId = localStorage.getItem("userId");
    const storedUsername = localStorage.getItem("username");

    if (token && storedUserId && storedUsername) {
      setAuthToken(token);
      setUserId(storedUserId);
      setUsername(storedUsername);
    }
  }, []);

  const login = async (username, password) => {
    try {
      const response = await axios.post(
        "https://capture-it.azurewebsites.net/api/authenticate/login",
        { username, password }
      );
      const { token, userId, username: returnedUsername } = response.data;

      setAuthToken(token);
      setUserId(userId);
      setUsername(returnedUsername);

      localStorage.setItem("authToken", token);
      localStorage.setItem("userId", userId);
      localStorage.setItem("username", returnedUsername);
    } catch (error) {
      throw new Error ("Invalid Username or Password");
      console.error("Login failed", error);
    }
  };

  const logout = () => {
    setAuthToken(null);
    setUserId(null);
    setUsername(null);

    localStorage.removeItem("authToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("username");
 
  };

  return (
    <AuthContext.Provider
      value={{ authToken, userId, username, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
