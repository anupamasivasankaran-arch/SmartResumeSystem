import "./AppliedJobs.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function AppliedJobs() {
    const navigate = useNavigate();

    const [appliedJobs, setAppliedJobs] = useState([]);

    useEffect(() => {
        const jobs =
            JSON.parse(localStorage.getItem("appliedJobs")) || [];

        setAppliedJobs(jobs);
    }, []);

    const withdrawApplication = (id) => {
        const updatedJobs = appliedJobs.filter(
            (job) => job._id !== id
        );

        setAppliedJobs(updatedJobs);

        localStorage.setItem(
            "appliedJobs",
            JSON.stringify(updatedJobs)
        );

        alert("Application Withdrawn");
    };

    return (
        <div className="applied-page">

            <div className="applied-topbar">

                <div>
                    <h1>Applied Jobs</h1>
                    <p>
                        Track your job applications and hiring progress
                    </p>
                </div>

                <input
                    type="text"
                    placeholder="Search applications..."
                    className="applied-search"
                />

            </div>

            <div className="applied-grid">

                {appliedJobs.length === 0 ? (

                    <h2 style={{ color: "white" }}>
                        No Applications Found
                    </h2>

                ) : (

                    appliedJobs.map((job) => (

                        <div
                            className="applied-card"
                            key={job._id}
                        >

                            <div className="applied-logo">

                                <div
                                    style={{
                                        width: "70px",
                                        height: "70px",
                                        background: "white",
                                        borderRadius: "20px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        fontWeight: "700",
                                        fontSize: "28px",
                                    }}
                                >
                                    {job.company?.charAt(0)}
                                </div>

                            </div>

                            <h2>{job.title}</h2>

                            <h3>{job.company}</h3>

                            <div className="applied-details">

                                <span>
                                    📍 {job.location}
                                </span>

                                <span>
                                    💰 {job.salary}
                                </span>

                            </div>

                            <div className="applied-tags">

                                <span className="job-type">
                                    Full Time
                                </span>

                                <span className="job-status">
                                    Applied
                                </span>

                            </div>

                            <div className="applied-buttons">

                                <button
                                    className="view-btn"
                                    onClick={() =>
                                        navigate(
                                            "/jobseeker/application-details"
                                        )
                                    }
                                >
                                    View Details
                                </button>

                                <button
                                    className="track-btn"
                                    onClick={() =>
                                        navigate(
                                            "/jobseeker/track-applications"
                                        )
                                    }
                                >
                                    Track
                                </button>

                                <button
                                    className="withdraw-btn"
                                    onClick={() =>
                                        withdrawApplication(job._id)
                                    }
                                >
                                    Withdraw
                                </button>

                            </div>

                        </div>

                    ))

                )}

            </div>

        </div>
    );
}

export default AppliedJobs;