import React, { useEffect, useState } from 'react';

const Experience = () => {
  const [exp, setExp] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/getExp')
      .then(res => res.json())
      .then(data => setExp(data));
  }, []);

  return (
    <div className="section">
      <h2>Experience</h2>
      {exp.map((item, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <strong>{item.role}</strong> at {item.company}<br />
          <span>{item.years}</span>
        </div>
      ))}
    </div>
  );
};

export default Experience;
