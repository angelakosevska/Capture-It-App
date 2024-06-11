import React from 'react';
import { Link } from "react-router-dom";
import './style.css';
import Logo1 from "../../Logo";

const Login = () => {
    return (
      <div className="login-container">
        <div className="login-box">
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
          <form>

            <input type="text" placeholder="Username" className="input-field" />
            <input type="password" placeholder="Password" className="input-field" />
            
            <div className="extra-options">

            <div className="checkbox-wrapper-46">
            <input type="checkbox" id="cbx-46" class="inp-cbx" />
            <label for="cbx-46" class="cbx">
              
              <span>
                <svg viewBox="0 0 12 10" height="10px" width="12px">
                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline></svg></span
              ><span>Remember me</span>
            </label>
          </div>

              <Link to="/forgot-password" className="forgot-password">Forgot password?</Link>
            </div>
            <button type="submit" className="login-button">Login</button>
          </form>
        
          {/* <div className="social-login">
            <button className="social-button facebook">Log in with Facebook</button>
            <button className="social-button google">Log in with Google</button>
            <button className="social-button apple">Log in with Apple</button>
          </div> */}
          <p className="register-text">
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
        </div>
      </div>
    );
};
  
export default Login;
