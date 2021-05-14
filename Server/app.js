const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

// routes
const books = require('./routes/api/books');

const app = express();

// Tilslut til databasen
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send ('Her starter det hele'));

// use Routes
app.use('/api/books', books);

const port = process.env.PORT || 8091;

app.listen(port, () => console.log(`Server running on port ${port}`));