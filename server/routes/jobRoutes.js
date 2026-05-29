const express = require("express");

const router = express.Router();

const {
    createJob,
    getJobs,
    getJobById,
    deleteJob
} = require("../controllers/jobController");

// POST
router.post("/", createJob);

// GET ALL
router.get("/", getJobs);

// GET ONE
router.get("/:id", getJobById);

// DELETE
router.delete("/:id", deleteJob);

module.exports = router;