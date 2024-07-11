import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Simulate subscribing the user (could be replaced with actual API call)
    setSubscribed(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Awesome Product</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla felis erat.</p>
        <p>$99.99</p>
        <button className="btn">Buy Now</button>
      </header>
      <main className="App-main">
        <section className="features">
          <h2>Key Features</h2>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
        </section>
        <section className="pricing">
          <h2>Pricing</h2>
          <p>$99.99</p>
          <p>Special offer: Buy 2, get 1 free!</p>
        </section>
        <section className="newsletter">
          <h2>Subscribe to Our Newsletter</h2>
          {subscribed ? (
            <p>Thank you for subscribing!</p>
          ) : (
            <form onSubmit={handleFormSubmit}>
              <input
                type="email"
                value={email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
              />
              <button type="submit" className="btn">Subscribe</button>
            </form>
          )}
        </section>
        <section className="contact">
          <h2>Contact Us</h2>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button className="btn">Send</button>
          </form>
        </section>
      </main>
      <footer className="App-footer">
        <p>&copy; 2024 Product Landing Page. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
