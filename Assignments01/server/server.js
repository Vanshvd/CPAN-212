const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8000;

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.get('/getOverview', (req, res) => {
  res.json({
    name: "John Doe",
    title: "Full Stack Developer",
    summary: "Passionate developer with 5+ years building web applications using React and Node.js."
  });
});

app.get('/getEdu', (req, res) => {
  res.json([
    { degree: "B.Sc. Computer Science", institution: "XYZ University", year: "2018" },
    { degree: "M.Sc. Software Engineering", institution: "ABC Institute", year: "2020" }
  ]);
});

app.get('/getExp', (req, res) => {
  res.json([
    { company: "Tech Corp", role: "Frontend Developer", years: "2020-2022" },
    { company: "Web Solutions", role: "Full Stack Developer", years: "2022-Present" }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
