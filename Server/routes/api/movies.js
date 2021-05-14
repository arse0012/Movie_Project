const express = require('express');
const router = express.Router();

// Load movie model
const Movie = require('../../models/Movie');

// @route GET api/movies/
// @description 
// @access Public