import React, { useEffect, useState } from 'react';

const Education = () => {
  const [edu, setEdu] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/getEdu')
      .then(res => res.json())
      .then(data => setEdu(data));
  }, []);

  return (
    <div className="section">
      <h2>Education</h2>
      {edu.map((item, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <strong>{item.degree}</strong><br />
          <span>{item.institution} - {item.year}</span>
        </div>
      ))}
    </div>
  );
};

export default Education;
