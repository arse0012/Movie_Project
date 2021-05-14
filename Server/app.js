const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Tilslut til databasen
connectDB();

app.get('/', (req, res) => res.send ('Her starter det hele'));

const port = process.env.PORT || 8091;

app.listen(port, () => console.log(`Server running on port ${port}`));