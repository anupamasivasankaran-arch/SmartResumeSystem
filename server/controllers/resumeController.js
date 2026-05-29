const Resume =
    require("../models/Resume");

exports.uploadResume =
    async (req, res) => {

        try {

            const skills = [
                "React",
                "JavaScript",
                "Node.js",
                "MongoDB"
            ];

            const atsScore = 92;

            const resume =
                await Resume.create({

                    fileName:
                        req.file.filename,

                    filePath:
                        req.file.path,

                    skills,

                    atsScore

                });

            res.status(201).json({

                success: true,

                message:
                    "Resume uploaded successfully",

                resume

            });

        } catch (error) {

            res.status(500).json({

                success: false,

                message:
                    error.message

            });

        }

    };

exports.getResumes =
    async (req, res) => {

        try {

            const resumes =
                await Resume.find();

            res.status(200).json({

                success: true,

                resumes

            });

        } catch (error) {

            res.status(500).json({

                success: false,

                message:
                    error.message

            });

        }

    };

exports.getResumeById =
    async (req, res) => {

        try {

            const resume =
                await Resume.findById(
                    req.params.id
                );

            if (!resume) {

                return res.status(404).json({

                    success: false,

                    message:
                        "Resume not found"

                });

            }

            res.status(200).json({

                success: true,

                resume

            });

        } catch (error) {

            res.status(500).json({

                success: false,

                message:
                    error.message

            });

        }

    };

exports.deleteResume =
    async (req, res) => {

        try {

            const resume =
                await Resume.findByIdAndDelete(
                    req.params.id
                );

            if (!resume) {

                return res.status(404).json({

                    success: false,

                    message:
                        "Resume not found"

                });

            }

            res.status(200).json({

                success: true,

                message:
                    "Resume deleted successfully"

            });

        } catch (error) {

            res.status(500).json({

                success: false,

                message:
                    error.message

            });

        }

    };