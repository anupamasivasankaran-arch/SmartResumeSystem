import "./PostJobs.css";
import { useState } from "react";
import axios from "axios";

function PostJobs() {

    const [jobTitle, setJobTitle] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [location, setLocation] = useState("");
    const [salary, setSalary] = useState("");
    const [jobType, setJobType] = useState("");
    const [description, setDescription] = useState("");

    const [publishedJobs, setPublishedJobs] =
        useState([]);

    const [draftJobs, setDraftJobs] =
        useState([]);

    const publishJob = async () => {

        if (
            !jobTitle ||
            !companyName ||
            !location
        ) {
            alert("Please fill all fields");
            return;
        }
        try {
            await axios.post(
                "/api/resumes/upload",
                {
                    title: jobTitle,
                    company: companyName,
                    location: location,
                    salary: salary,
                    description: description,
                    skills: jobType
                }
            );

            console.log("Job saved to database");
        } catch (error) {
            console.log(error);
        }

        const newJob = {
            id: Date.now(),
            jobTitle,
            companyName,
            location,
            salary,
            jobType,
            description,
        };

        setPublishedJobs([
            newJob,
            ...publishedJobs,
        ]);

        clearForm();

        alert("Job Published Successfully");
    };

    const saveDraft = () => {

        if (
            !jobTitle &&
            !companyName
        ) {
            alert("Enter Job Details");
            return;
        }

        const draftJob = {
            id: Date.now(),
            jobTitle,
            companyName,
            location,
            salary,
            jobType,
            description,
        };

        setDraftJobs([
            draftJob,
            ...draftJobs,
        ]);

        clearForm();

        alert("Draft Saved");
    };

    const clearForm = () => {
        setJobTitle("");
        setCompanyName("");
        setLocation("");
        setSalary("");
        setJobType("");
        setDescription("");
    };

    return (

        <div className="post-jobs-page">

            {/* HEADER */}

            <div className="post-header">

                <h1>Post Jobs</h1>

                <p>
                    Publish jobs and manage drafts
                </p>

            </div>

            {/* FORM */}

            <div className="job-form">

                <div className="form-grid">

                    <input
                        type="text"
                        placeholder="Job Title"
                        value={jobTitle}
                        onChange={(e) =>
                            setJobTitle(e.target.value)
                        }
                    />

                    <input
                        type="text"
                        placeholder="Company Name"
                        value={companyName}
                        onChange={(e) =>
                            setCompanyName(e.target.value)
                        }
                    />

                </div>

                <div className="form-grid">

                    <input
                        type="text"
                        placeholder="Location"
                        value={location}
                        onChange={(e) =>
                            setLocation(e.target.value)
                        }
                    />

                    <input
                        type="text"
                        placeholder="Salary Package"
                        value={salary}
                        onChange={(e) =>
                            setSalary(e.target.value)
                        }
                    />

                </div>

                <select
                    value={jobType}
                    onChange={(e) =>
                        setJobType(e.target.value)
                    }
                >

                    <option value="">
                        Select Job Type
                    </option>

                    <option>
                        Full Time
                    </option>

                    <option>
                        Part Time
                    </option>

                    <option>
                        Remote
                    </option>

                    <option>
                        Internship
                    </option>

                </select>

                <textarea
                    rows="6"
                    placeholder="Job Description"
                    value={description}
                    onChange={(e) =>
                        setDescription(e.target.value)
                    }
                />

                <div className="job-buttons">

                    <button
                        className="publish-btn"
                        onClick={publishJob}
                    >
                        Publish Job
                    </button>

                    <button
                        className="draft-btn"
                        onClick={saveDraft}
                    >
                        Save Draft
                    </button>

                </div>

            </div>

            {/* PUBLISHED JOBS */}

            <div className="jobs-section">

                <h2>Published Jobs</h2>

                {
                    publishedJobs.length === 0
                        ? (
                            <p className="empty-text">
                                No published jobs yet
                            </p>
                        )
                        : (
                            <div className="jobs-grid">

                                {
                                    publishedJobs.map((job) => (
                                        <div
                                            className="job-card"
                                            key={job.id}
                                        >

                                            <h3>
                                                {job.jobTitle}
                                            </h3>

                                            <p>
                                                🏢 {job.companyName}
                                            </p>

                                            <p>
                                                📍 {job.location}
                                            </p>

                                            <p>
                                                💰 {job.salary}
                                            </p>

                                            <p>
                                                📝 {job.description}
                                            </p>

                                            <span>
                                                {job.jobType}
                                            </span>

                                        </div>
                                    ))
                                }

                            </div>
                        )
                }

            </div>

            {/* DRAFT JOBS */}

            <div className="jobs-section">

                <h2>Draft Jobs</h2>

                {
                    draftJobs.length === 0
                        ? (
                            <p className="empty-text">
                                No drafts saved
                            </p>
                        )
                        : (
                            <div className="jobs-grid">

                                {
                                    draftJobs.map((job) => (
                                        <div
                                            className="job-card draft-card"
                                            key={job.id}
                                        >

                                            <h3>
                                                {job.jobTitle}
                                            </h3>

                                            <p>
                                                🏢 {job.companyName}
                                            </p>

                                            <p>
                                                📍 {job.location}
                                            </p>

                                            <p>
                                                💰 {job.salary}
                                            </p>

                                            <p>
                                                📝 {job.description}
                                            </p>

                                            <span>
                                                Draft
                                            </span>

                                        </div>
                                    ))
                                }

                            </div>
                        )
                }

            </div>

        </div>
    );
}

export default PostJobs;