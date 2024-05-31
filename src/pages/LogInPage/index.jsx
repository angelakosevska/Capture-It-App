import React from 'react';
import { Link } from "react-router-dom";
import './style.css';
import Logo from '../../components/Logo1';

const Login = () => {
    return (
      <div className="login-container">
        <div className="login-box">
          <img src="path-to-logo.png" alt="Logo" className="logo" />
          <form>
            <input type="text" placeholder="Username/Email/Phone" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
          </form>
          <div className="social-login">
            <button>Log in with Facebook</button>
            <button>Log in with Google</button>
            <button>Log in with Apple</button>
          </div>
          <p>
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
        </div>
      </div>
    );
  };
  
  export default Login;