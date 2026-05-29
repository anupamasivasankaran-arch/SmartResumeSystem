import { useState } from "react";
import "./Jobs.css";

function Jobs() {

    const [jobs, setJobs] = useState([
        {
            id: 1,
            title: "Frontend Developer",
            company: "Tech Solutions",
            location: "Bangalore",
            status: "Open",
        },

        {
            id: 2,
            title: "UI/UX Designer",
            company: "CreativeX",
            location: "Mumbai",
            status: "Open",
        },

        {
            id: 3,
            title: "Python Developer",
            company: "CodeCraft",
            location: "Chennai",
            status: "Closed",
        },
    ]);

    const [showForm, setShowForm] = useState(false);

    const [newJob, setNewJob] = useState({
        title: "",
        company: "",
        location: "",
    });

    const handleChange = (e) => {

        setNewJob({
            ...newJob,
            [e.target.name]: e.target.value,
        });

    };

    const handleAddJob = (e) => {

        e.preventDefault();

        const job = {
            id: jobs.length + 1,
            title: newJob.title,
            company: newJob.company,
            location: newJob.location,
            status: "Open",
        };

        setJobs([...jobs, job]);

        setNewJob({
            title: "",
            company: "",
            location: "",
        });

        setShowForm(false);

    };

    const toggleStatus = (id) => {

        const updatedJobs = jobs.map((job) =>
            job.id === id
                ? {
                    ...job,
                    status:
                        job.status === "Open"
                            ? "Closed"
                            : "Open",
                }
                : job
        );

        setJobs(updatedJobs);

    };

    return (

        <div className="jobs-page">

            <div className="jobs-header">

                <div>

                    <h1>Jobs Management</h1>

                    <p>
                        Smart Resume Analyzer & Job Platform
                    </p>

                </div>

                <button
                    className="post-btn"
                    onClick={() =>
                        setShowForm(!showForm)
                    }
                >
                    {showForm
                        ? "Close Form"
                        : "Post New Job"}
                </button>

            </div>

            {/* STATS */}

            <div className="stats-grid">

                <div className="stats-card">
                    <h2>{jobs.length}</h2>
                    <p>Total Jobs</p>
                </div>

                <div className="stats-card">
                    <h2>
                        {
                            jobs.filter(
                                (job) =>
                                    job.status === "Open"
                            ).length
                        }
                    </h2>
                    <p>Open Jobs</p>
                </div>

                <div className="stats-card">
                    <h2>
                        {
                            jobs.filter(
                                (job) =>
                                    job.status === "Closed"
                            ).length
                        }
                    </h2>
                    <p>Closed Jobs</p>
                </div>

                <div className="stats-card">
                    <h2>342</h2>
                    <p>Applications</p>
                </div>

            </div>

            {/* ADD JOB FORM */}

            {showForm && (

                <div className="form-card">

                    <h2>Add New Job</h2>

                    <form onSubmit={handleAddJob}>

                        <input
                            type="text"
                            name="title"
                            placeholder="Job Title"
                            value={newJob.title}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="text"
                            name="company"
                            placeholder="Company Name"
                            value={newJob.company}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="text"
                            name="location"
                            placeholder="Location"
                            value={newJob.location}
                            onChange={handleChange}
                            required
                        />

                        <button
                            type="submit"
                            className="submit-btn"
                        >
                            Add Job
                        </button>

                    </form>

                </div>

            )}

            {/* JOBS TABLE */}

            <div className="table-card">

                <table>

                    <thead>

                        <tr>

                            <th>Job Title</th>
                            <th>Company</th>
                            <th>Location</th>
                            <th>Status</th>
                            <th>Action</th>

                        </tr>

                    </thead>

                    <tbody>

                        {jobs.map((job) => (

                            <tr key={job.id}>

                                <td>{job.title}</td>

                                <td>{job.company}</td>

                                <td>{job.location}</td>

                                <td>

                                    <span
                                        className={
                                            job.status === "Open"
                                                ? "status open"
                                                : "status closed"
                                        }
                                    >
                                        {job.status}
                                    </span>

                                </td>

                                <td>

                                    <button
                                        className="toggle-btn"
                                        onClick={() =>
                                            toggleStatus(job.id)
                                        }
                                    >
                                        {job.status === "Open"
                                            ? "Close Job"
                                            : "Reopen"}
                                    </button>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    );
}

export default Jobs;