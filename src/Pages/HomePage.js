import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <header>
        {/* Header content */}
      </header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/adopt">Adopt</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/service">Service</Link></li>
          <li><Link to="/Pages/login">Login</Link></li>
          <li><Link to="/Pages/signup">Sign Up</Link></li>
        </ul>
      </nav>
      <main>
        {/* Featured content */}
        <section>
          <h1>Welcome to our Pet Adoption Website</h1>
          <p>Find your perfect pet companion here!</p>
        </section>
      </main>
      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default Home;
