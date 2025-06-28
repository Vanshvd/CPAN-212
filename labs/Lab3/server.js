const express = require('express');
const multer = require('multer');
const cors = require('cors');
const { sampleSize } = require('lodash');
const fetch = require('node-fetch');
const fs = require('fs');


const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname)
  }
});
const upload = multer({ storage: storage });

if (!fs.existsSync('uploads')) fs.mkdirSync('uploads');

// POST /upload - multiple images
app.post('/upload', upload.array('images', 10), (req, res) => {
  res.send('Files uploaded');
});

// GET /random-images
app.get('/random-images', (req, res) => {
  fs.readdir('uploads', (err, files) => {
    if (err) return res.status(500).send('Error reading files');
    res.json({ images: sampleSize(files, 3) });
  });
});

// POST /upload-dog
app.post('/upload-dog', async (req, res) => {
  try {
    const { imageUrl } = req.body;
    const response = await fetch(imageUrl);
    const buffer = await response.buffer();
    fs.writeFileSync(`uploads/dog-${Date.now()}.jpg`, buffer);
    res.send('Dog image saved');
  } catch {
    res.status(500).send('Failed');
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
