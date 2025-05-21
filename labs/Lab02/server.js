// server.js
const express = require('express');
const app = express();
const routes = require('./routes'); // Assuming routes.js is named and located as ./routes.js

app.use('/', routes);

app.listen(8000, () => {
  console.log('Server is running at http://localhost:8000');
});
