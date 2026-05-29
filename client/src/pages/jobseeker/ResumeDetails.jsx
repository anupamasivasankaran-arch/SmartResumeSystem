import "./ResumeDetails.css";

import { useNavigate } from "react-router-dom";

function ResumeDetails() {

    const navigate = useNavigate();

    const resumeName =
        localStorage.getItem("resumeName") ||
        "No Resume Uploaded";

    const suggestedJobs = [

        {
            title: "Frontend Developer",
            company: "Google",
            location: "Remote",
            match: "95%",
        },

        {
            title: "React Developer",
            company: "Infosys",
            location: "Kochi",
            match: "92%",
        },

        {
            title: "UI/UX Designer",
            company: "Microsoft",
            location: "Bangalore",
            match: "88%",
        },

    ];

    return (

        <div className="resume-details-page">

            <div className="resume-details-header">

                <div>

                    <h1>Resume Analysis</h1>

                    <p>
                        AI analyzed your uploaded resume
                    </p>

                </div>

                <div className="resume-score">
                    92%
                </div>

            </div>

            <div className="resume-main-card">

                <div className="resume-top">

                    <div className="resume-file">

                        <div className="file-icon">
                            📄
                        </div>

                        <div>

                            <h2>{resumeName}</h2>

                            <p>
                                Uploaded Successfully
                            </p>

                        </div>

                    </div>

                    <button
                        className="download-btn"
                        onClick={() =>
                            navigate("/jobseeker/generated-resume")
                        }
                    >
                        Generate Best Resume
                    </button>

                </div>

                <div
                    style={{
                        display: "flex",
                        gap: "15px",
                        marginTop: "20px",
                        flexWrap: "wrap",
                    }}
                >

                    <button
                        className="download-btn"
                    >
                        Download Resume
                    </button>

                    <button
                        className="download-btn"
                        onClick={() =>
                            navigate("/jobseeker/resume-upload")
                        }
                    >
                        Replace Resume
                    </button>

                </div>

                <div className="resume-details-grid">

                    <div className="resume-info-box">

                        <h3>Skills Detected</h3>

                        <div className="skills-list">

                            <span>React.js</span>

                            <span>JavaScript</span>

                            <span>Node.js</span>

                            <span>MongoDB</span>

                            <span>UI/UX</span>

                        </div>

                    </div>

                    <div className="resume-info-box">

                        <h3>Missing Skills</h3>

                        <div className="skills-list">

                            <span>AWS</span>

                            <span>Docker</span>

                            <span>TypeScript</span>

                            <span>Kubernetes</span>

                        </div>

                    </div>

                    <div className="resume-info-box">

                        <h3>Resume Details</h3>

                        <div className="detail-item">

                            <span>ATS Score</span>

                            <strong>92%</strong>

                        </div>

                        <div className="detail-item">

                            <span>Experience</span>

                            <strong>Fresher</strong>

                        </div>

                        <div className="detail-item">

                            <span>Projects</span>

                            <strong>4 Projects</strong>

                        </div>

                        <div className="detail-item">

                            <span>Status</span>

                            <strong>Excellent</strong>

                        </div>

                    </div>

                </div>

            </div>

            <div className="resume-main-card">

                <div className="jobs-header">

                    <h2>AI Recommended Jobs</h2>

                    <p>
                        Jobs matched with your resume
                    </p>

                </div>

                <div className="suggested-jobs-grid">

                    {suggestedJobs.map((job, index) => (

                        <div
                            className="suggested-job-card"
                            key={index}
                        >

                            <h3>{job.title}</h3>

                            <h4>{job.company}</h4>

                            <p>
                                📍 {job.location}
                            </p>

                            <p>
                                🎯 Match Score: {job.match}
                            </p>

                            <button
                                className="apply-job-btn"
                                onClick={() =>
                                    navigate("/jobseeker/job-apply")
                                }
                            >
                                Apply Now
                            </button>

                        </div>

                    ))}

                </div>

            </div>

        </div>

    );

}

export default ResumeDetails;