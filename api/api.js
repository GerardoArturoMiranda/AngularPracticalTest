// Api Redirect Router
// Dependencies
const router = require('express').Router();
const apiIdeasEndpoints = require('./endpoints/ideas');

// Establising Routes
router.use('/api/ideas', apiIdeasEndpoints);
module.exports = router