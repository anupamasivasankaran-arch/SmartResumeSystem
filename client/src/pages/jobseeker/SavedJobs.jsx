import "./SavedJobs.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SavedJobs() {
    const navigate = useNavigate();

    const [savedJobs, setSavedJobs] = useState([]);

    useEffect(() => {
        const jobs =
            JSON.parse(localStorage.getItem("savedJobs")) || [];

        setSavedJobs(jobs);
    }, []);

    const removeJob = (id) => {
        const updatedJobs = savedJobs.filter(
            (job) => job._id !== id
        );

        setSavedJobs(updatedJobs);

        localStorage.setItem(
            "savedJobs",
            JSON.stringify(updatedJobs)
        );
    };

    return (
        <div className="savedjobs-page">

            <div className="savedjobs-header">

                <div>
                    <h1>Saved Jobs</h1>
                    <p>
                        Jobs you saved for later
                    </p>
                </div>

            </div>

            <div className="savedjobs-grid">

                {savedJobs.length === 0 ? (

                    <div className="empty-state">
                        No Saved Jobs
                    </div>

                ) : (

                    savedJobs.map((job) => (

                        <div
                            className="saved-card"
                            key={job._id}
                        >

                            <div className="saved-top">

                                <div className="saved-logo">
                                    {job.company?.charAt(0)}
                                </div>

                                <div>
                                    <h2>{job.title}</h2>
                                    <h3>{job.company}</h3>
                                </div>

                            </div>

                            <div className="saved-info">
                                <span>📍 {job.location}</span>
                                <span>
                                    💰 {job.salary || "Not Specified"}
                                </span>
                            </div>

                            <p className="job-description">
                                {job.description}
                            </p>

                            <div className="saved-buttons">

                                <button
                                    className="apply-btn"
                                    onClick={() =>
                                        navigate("/jobseeker/job-apply", {
                                            state: { job },
                                        })
                                    }
                                >
                                    Apply Now
                                </button>

                                <button
                                    className="remove-btn"
                                    onClick={() =>
                                        removeJob(job._id)
                                    }
                                >
                                    Remove
                                </button>

                            </div>

                        </div>

                    ))

                )}

            </div>

        </div>
    );
}

export default SavedJobs;