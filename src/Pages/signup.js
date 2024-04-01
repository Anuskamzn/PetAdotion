// Signup.js

import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div>
      <h2>Sign Up</h2>
      {/* Add signup form here */}
      <div>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <button type="submit">Sign Up</button>
      </form>
    </div>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}

export default Signup;
