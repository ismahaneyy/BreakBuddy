import React from 'react';
import './Auth.css'; // Ensure this is the correct path to your Auth.css file

const Signup = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create Your Account</h2>
        <form>
          <input type="text" placeholder="Full name" />
          <input type="password" placeholder="Password" />
          <input type="email" placeholder="Email" />
          <select>
            <option>Student</option>
            <option>Body Builder</option>
            <option>Other</option>
          </select>
          <button type="submit" className="auth-button">Sign Up</button>
        </form>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
        <button className="google-button">Sign up with Google</button> {/* You can add this if needed */}
      </div>
    </div>
  );
};

export default Signup;
