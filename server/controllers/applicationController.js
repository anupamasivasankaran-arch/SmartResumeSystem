const Application =
    require("../models/Application");

const Job =
    require("../models/Job");

/* Apply For Job */

exports.applyJob =
    async (req, res) => {

        try {

            const { jobId } = req.body;

            const job =
                await Job.findById(jobId);

            if (!job) {

                return res.status(404).json({
                    message: "Job not found"
                });

            }

            const application =
                await Application.create({

                    jobId,

                    status: "Applied"

                });

            res.status(201).json({

                success: true,

                message:
                    "Application submitted successfully",

                application

            });

        } catch (error) {

            res.status(500).json({

                success: false,

                message: error.message

            });

        }

    };

/* Get All Applications */

exports.getApplications =
    async (req, res) => {

        try {

            const applications =
                await Application.find()
                    .populate("jobId");

            res.status(200).json({

                success: true,

                count:
                    applications.length,

                applications

            });

        } catch (error) {

            res.status(500).json({

                success: false,

                message: error.message

            });

        }

    };

/* Get Single Application */

exports.getApplicationById =
    async (req, res) => {

        try {

            const application =
                await Application.findById(
                    req.params.id
                ).populate("jobId");

            if (!application) {

                return res.status(404).json({

                    success: false,

                    message:
                        "Application not found"

                });

            }

            res.status(200).json({

                success: true,

                application

            });

        } catch (error) {

            res.status(500).json({

                success: false,

                message: error.message

            });

        }

    };

/* Delete Application */

exports.deleteApplication =
    async (req, res) => {

        try {

            const application =
                await Application.findById(
                    req.params.id
                );

            if (!application) {

                return res.status(404).json({

                    success: false,

                    message:
                        "Application not found"

                });

            }

            await Application.findByIdAndDelete(
                req.params.id
            );

            res.status(200).json({

                success: true,

                message:
                    "Application deleted successfully"

            });

        } catch (error) {

            res.status(500).json({

                success: false,

                message: error.message

            });

        }

    };