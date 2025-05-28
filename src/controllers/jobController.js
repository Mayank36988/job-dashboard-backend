const Job = require('../models/Job');

// Fetch all jobs
exports.getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.find();
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching jobs', error });
    }
};

// Fetch job by ID
exports.getJobById = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.status(200).json(job);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching job', error });
    }
};

// Add a new job
exports.addJob = async (req, res) => {
    const { title, company, type, location, description } = req.body;

    const newJob = new Job({
        title,
        company,
        type,
        location,
        description,
    });

    try {
        const savedJob = await newJob.save();
        res.status(201).json(savedJob);
    } catch (error) {
        res.status(500).json({ message: 'Error adding job', error });
    }
};

// Add delete job function
exports.deleteJob = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedJob = await Job.findByIdAndDelete(id);
        
        if (!deletedJob) {
            return res.status(404).json({ message: 'Job not found' });
        }
        
        res.status(200).json({ 
            success: true, 
            message: 'Job deleted successfully' 
        });
    } catch (error) {
        console.error('Delete job error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Error deleting job', 
            error: error.message 
        });
    }
};