import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css';

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !lastName || !username || !email || !password || !repeatPassword) {
            setError('Please fill out all required fields.');
        } else if (password !== repeatPassword) {
            setError('Passwords do not match.');
        } else {
            setError('');
            // Proceed with registration
            window.location.href = '/login';
        }
    };

    return (
        <div className="register-container">
            <div className="register-box">
                <img src="../../components/gallery/logo.png" alt="Logo" className="logo" />
                {error && <div className="error-message">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Name"
                            className={`input-field half-width${!name ? ' error' : ''}`}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className={`input-field half-width${!lastName ? ' error' : ''}`}
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <input
                        type="text"
                        placeholder="Username"
                        className={`input-field${!username ? ' error' : ''}`}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className={`input-field${!email ? ' error' : ''}`}
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
                        type="password"
                        placeholder="Create Password"
                        className={`input-field${!password ? ' error' : ''}`}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Repeat Password"
                        className={`input-field${!repeatPassword ? ' error' : ''}`}
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                    />
                    <button type="submit" className="register-button">Register</button>
                </form>
                <div className="divider">
                    <hr className="line" />
                    <span className="divider-text">Or register with</span>
                    <hr className="line" />
                </div>
                <div className="social-register">
                    <button className="social-button-reg facebook-reg">
                        <i className="bi bi-facebook"></i>
                    </button>
                    <button className="social-button-reg google-reg">
                        <i className="bi bi-google"></i>
                    </button>
                    <button className="social-button-reg apple-reg">
                        <i className="bi bi-apple"></i>
                    </button>
                </div>
                <div className="login-text">
                    Already have an account? <a href="/login">Login</a>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
