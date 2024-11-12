import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    password: '',
    email: '',
    role: 'student',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://bbbackend.onrender.com/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Signup successful");
        navigate('/dashboard');
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Signup failed');
        console.error('Failed to register:', errorData);
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create Your Account</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <select name="role" value={formData.role} onChange={handleChange} required>
            <option value="student">Student</option>
            <option value="bodybuilder">Body Builder</option>
            <option value="other">Other</option>
          </select>
          <button type="submit" className="auth-button">Sign Up</button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
        <button className="google-button">Sign up with Google</button>
      </div>
    </div>
  );
};

export default Signup;