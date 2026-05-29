const Job = require("../models/Job");

// POST JOB
exports.createJob = async (req, res) => {

    try {

        const job = await Job.create(req.body);

        res.status(201).json(job);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// GET ALL JOBS
exports.getJobs = async (req, res) => {

    try {

        const jobs = await Job.find();

        res.json(jobs);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// GET SINGLE JOB
exports.getJobById = async (req, res) => {

    try {

        const job = await Job.findById(
            req.params.id
        );

        res.json(job);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// DELETE JOB
exports.deleteJob = async (req, res) => {

    try {

        await Job.findByIdAndDelete(
            req.params.id
        );

        res.json({
            message: "Job Deleted"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};