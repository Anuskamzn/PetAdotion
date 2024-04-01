// Login.js

import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <h2>Login</h2>
      {/* Add login form here */}
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
}

export default Login;
