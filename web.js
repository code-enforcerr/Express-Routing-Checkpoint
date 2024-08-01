const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware to serve static files (CSS)
app.use(express.static("public"));

// Custom middleware to check working hours
const checkWorkingHours = (req, res, next) => {
  const currentHour = new Date().getHours();
  const currentDay = new Date().getDay(); // 0 is Sunday, 1 is Monday, ..., 6 is Saturday

  if (
    currentDay >= 1 &&
    currentDay <= 5 &&
    currentHour >= 9 &&
    currentHour < 17
  ) {
    next(); // Allow request
  } else {
    res.send(
      "The application is only available during working hours (Monday to Friday, 9 AM to 5 PM)."
    );
  }
};

app.use(checkWorkingHours);

// Route for Home page
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
        }
        nav {
          background-color: blue;
          color: white;
          padding: 10px;
        }
        nav a {
          color: white;
          text-decoration: none;
          margin: 0 15px;
        }
        h1 {
          color: #333;
        }
      </style>
      <title>Home</title>
    </head>
    <body>
      <nav>
        <a href="/">Home</a>
        <a href="/services">Our Services</a>
        <a href="/contact">Contact Us</a>
      </nav>
      <h1>Welcome</h1>
      <p>What do you want ?</p>
    </body>
    </html>
  `);
});

// Route for Our Services page
app.get("/services", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
        }
        nav {
          background-color: blue;
          color: white;
          padding: 10px;
        }
        nav a {
          color: white;
          text-decoration: none;
          margin: 0 15px;
        }
        h1 {
          color: #333;
        }
      </style>
      <title>Our Services</title>
    </head>
    <body>
      <nav>
        <a href="/">Home</a>
        <a href="/services">Our Services</a>
        <a href="/contact">Contact Us</a>
      </nav>
      <h1>Our Services</h1>
      <p>This page contains information about our services.</p>
    </body>
    </html>
  `);
});

// Route for Contact Us page
app.get("/contact", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
        }
        nav {
          background-color: blue;
          color: white;
          padding: 10px;
        }
        nav a {
          color: white;
          text-decoration: none;
          margin: 0 15px;
        }
        h1 {
          color: #333;
        }
      </style>
      <title>Contact Us</title>
    </head>
    <body>
      <nav>
        <a href="/">Home</a>
        <a href="/services">Our Services</a>
        <a href="/contact">Contact Us</a>
      </nav>
      <h1>Contact Us</h1>
      <p>This page contains our contact information.</p>
    </body>
    </html>
  `);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
