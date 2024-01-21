import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Provision Store</h2>
      <p>
        Provision Store is an E-shop website that serves as a virtual provision
        marketplace. Users can explore and purchase various provision products.
      </p>
      <h3>Folder Structure</h3>
      <p>
        The project follows the structure below:
        <pre>
          provision-store/
          <br />
          |-- public/
          <br />
          | |-- pro.png
          <br />
          |-- src/
          <br />
          | |-- api/
          <br />
          | |-- |-- getProducts.js
          <br />
          | |-- |-- login.js
          <br />
          | |-- assets/
          <br />
          | |-- |-- pro.png
          <br />
          | |-- components/
          <br />
          | |-- Card/
          <br />
          | |-- |-- ProductCard.jsx
          <br />
          | |-- |-- ProductCard.css
          <br />
          | |-- Navbar/
          <br />
          | |-- |-- Navbar.jsx
          <br />
          | |-- |-- Navbar.css
          <br />
          | |-- pages/
          <br />
          | |-- About/
          <br />
          | |-- |-- About.jsx
          <br />
          | |-- |-- About.css
          <br />
          | |-- LogIn/
          <br />
          | |-- |-- LogIn.jsx
          <br />
          | |-- |-- LogIn.css
          <br />
          | |-- Products/
          <br />
          | |-- |-- Products.jsx
          <br />
          | |-- |-- Products.css
          <br />
          | |-- utils
          <br />
          | |-- |-- index.js
          <br />
          | |-- |-- validation.js
          <br />
          |-- App.jsx
          <br />
          |-- App.css
          <br />
          |-- main.jsx
          <br />
          |-- .eslintrc.cjs
          <br />
          |-- .gitignore
          <br />
          |-- index.html
          <br />
          |-- package-lock.json
          <br />
          |-- package.json
          <br />
          |-- README.md
          <br />
          |-- vite.config.js
          <br />
        </pre>
      </p>

      <h3>Challenges Faced</h3>
      <ol>
        <li>
          Implementing user input validation for E-mail and Password using yup
          library.
          <p className="challengeDescription">
            After researching for best way to use for handling validation I
            decided to use yup library. <br /> It was validating the schema as
            expected but in incorrect order, the password was getting validated
            before the username(email) field. <br />I searched for a fix but
            turned out that all fields of the object are validated paralelly, so
            this turned out to be an behavior of library which can't be changed,
            So to fix this, I validated the fields manually in order (See code
            in validateInput function in src/pages/Login/Login.jsx)
          </p>
        </li>
      </ol>

      <h3>Project Setup</h3>
      <p>
        To start the project, follow these steps:
        <ol>
          <li>Clone the repository.</li>
          <li>
            Run <code>npm install</code> to install dependencies.
          </li>
          <li>
            Execute <code>npm run dev</code> to start the development server.
          </li>
        </ol>
      </p>
    </div>
  );
};

export default About;
