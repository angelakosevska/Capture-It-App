import React from 'react';
import { Link } from "react-router-dom";
import './style.css';
import Logo from "../../components/LogoPr/captureit.png";

const Login = () => {
    return (
      <div className="login-container">
        <div className="login-box">
          <img src={Logo} alt="Logo" className="logo" />
          <form>
            <input type="text" placeholder="Username/Email/Phone" className="input-field" />
            <input type="password" placeholder="Password" className="input-field" />
            <div className="extra-options">
              <div className="remember-me">
                <input type="checkbox" id="rememberMe" />
                <label htmlFor="rememberMe">Remember me</label>
              </div>
              <Link to="/forgot-password" className="forgot-password">Forgot password?</Link>
            </div>
            <button type="submit" className="login-button">Login</button>
          </form>
          <div className="social-login">
            <button className="social-button facebook">Log in with Facebook</button>
            <button className="social-button google">Log in with Google</button>
            <button className="social-button apple">Log in with Apple</button>
          </div>
          <p className="register-text">
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
        </div>
      </div>
    );
};
  
export default Login;