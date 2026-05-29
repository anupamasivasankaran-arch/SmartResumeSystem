import { useState } from "react";
import "./Applications.css";

function Applications() {

    const [applications, setApplications] = useState([
        {
            id: 1,
            candidate: "Anupama",
            role: "Frontend Developer",
            company: "Google",
            status: "Shortlisted",
        },

        {
            id: 2,
            candidate: "Rahul",
            role: "UI/UX Designer",
            company: "Microsoft",
            status: "Pending",
        },

        {
            id: 3,
            candidate: "Meera",
            role: "Python Developer",
            company: "Amazon",
            status: "Rejected",
        },
    ]);

    const updateStatus = (id, newStatus) => {

        const updatedApplications = applications.map((app) =>
            app.id === id ? { ...app, status: newStatus } : app
        );

        setApplications(updatedApplications);
    };

    const handleViewAll = () => {

        const report = applications
            .map(
                (app) =>
                    `Candidate: ${app.candidate}
Role: ${app.role}
Company: ${app.company}
Status: ${app.status}
-------------------------`
            )
            .join("\n");

        const blob = new Blob([report], { type: "text/plain" });

        const link = document.createElement("a");

        link.href = URL.createObjectURL(blob);

        link.download = "applications-report.txt";

        link.click();
    };

    const shortlistedCount = applications.filter(
        (app) => app.status === "Shortlisted"
    ).length;

    const pendingCount = applications.filter(
        (app) => app.status === "Pending"
    ).length;

    const rejectedCount = applications.filter(
        (app) => app.status === "Rejected"
    ).length;

    return (
        <div className="applications-page">

            {/* HEADER */}

            <div className="applications-header">

                <div>
                    <h1>Applications Management</h1>
                    <p>Manage candidate applications</p>
                </div>

                <button
                    className="view-btn"
                    onClick={handleViewAll}
                >
                    View All
                </button>

            </div>

            {/* STATS */}

            <div className="stats-grid">

                <div className="stats-card">
                    <h2>{applications.length}</h2>
                    <p>Total Applications</p>
                </div>

                <div className="stats-card">
                    <h2>{shortlistedCount}</h2>
                    <p>Shortlisted</p>
                </div>

                <div className="stats-card">
                    <h2>{pendingCount}</h2>
                    <p>Pending</p>
                </div>

                <div className="stats-card">
                    <h2>{rejectedCount}</h2>
                    <p>Rejected</p>
                </div>

            </div>

            {/* TABLE */}

            <div className="table-card">

                <table>

                    <thead>
                        <tr>
                            <th>Candidate</th>
                            <th>Job Role</th>
                            <th>Company</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>

                        {applications.map((app) => (

                            <tr key={app.id}>

                                <td>{app.candidate}</td>

                                <td>{app.role}</td>

                                <td>{app.company}</td>

                                <td>
                                    <span
                                        className={`status ${app.status.toLowerCase()}`}
                                    >
                                        {app.status}
                                    </span>
                                </td>

                                <td>

                                    <select
                                        className="status-select"
                                        value={app.status}
                                        onChange={(e) =>
                                            updateStatus(app.id, e.target.value)
                                        }
                                    >

                                        <option value="Shortlisted">
                                            Shortlisted
                                        </option>

                                        <option value="Pending">
                                            Pending
                                        </option>

                                        <option value="Rejected">
                                            Rejected
                                        </option>

                                    </select>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default Applications;