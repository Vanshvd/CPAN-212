import React, { useEffect, useState } from 'react';

const Overview = () => {
  const [overview, setOverview] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/getOverview')
      .then(res => res.json())
      .then(data => setOverview(data));
  }, []);

  return (
    <div className="section">
      <h2>Overview</h2>
      {overview && (
        <div>
          <h3 style={{ marginBottom: "5px" }}>{overview.name}</h3>
          <p style={{ fontStyle: "italic", margin: 0 }}>{overview.title}</p>
          <p style={{ marginTop: "10px" }}>{overview.summary}</p>
        </div>
      )}
    </div>
  );
};

export default Overview;
