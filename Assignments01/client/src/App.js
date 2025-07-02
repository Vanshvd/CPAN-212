import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="header">
        <h1>Vansh Dhiman</h1>
        <p className="student-id">Student ID: N01670791</p>
      </div>

      <section>
        <h2>About Me</h2>
        <p>
          Hi, I'm Vansh. I'm currently pursuing a diploma in Computer Programming at Humber College.
          I enjoy building websites and learning about new technologies. I love solving problems,
          working on interesting projects, and exploring how software can make life easier.
        </p>
        <p>
          My goal is to become a full stack developer and work on large-scale applications
          that help people around the world.
        </p>
      </section>

      <section>
        <h2>Education</h2>
        <ul>
          <li>Diploma in Computer Programming - Humber College (Expected 2026)</li>
          <li>High School Diploma - Delhi Public School (2023)</li>
        </ul>
      </section>

      <section>
        <h2>Skills</h2>
        <div className="skills">
          <span>HTML</span><span>CSS</span><span>JavaScript</span>
          <span>React</span><span>Node.js</span><span>MongoDB</span>
        </div>
      </section>

      <section>
        <h2>Certifications</h2>
        <ul>
          <li>Introduction to Front-End Development - Meta (Coursera)</li>
          <li>JavaScript Algorithms and Data Structures - freeCodeCamp</li>
        </ul>
      </section>

      <section>
        <h2>Contact</h2>
        <p>Email: vansh.dhiman@example.com</p>
        <p>LinkedIn: linkedin.com/in/vanshdhiman</p>
        <p>GitHub: github.com/vanshdhiman</p>
      </section>

      <footer>
        &copy; 2025 Vansh Dhiman | All rights reserved.
      </footer>
    </div>
  );
}

export default App;
