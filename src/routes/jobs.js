const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');

// Remove /api prefix from here as it's already in app.js
router.get('/jobs', jobController.getAllJobs);
router.get('/jobs/:id', jobController.getJobById);
router.post('/jobs', jobController.addJob);
router.delete('/jobs/:id', jobController.deleteJob);

module.exports = router;