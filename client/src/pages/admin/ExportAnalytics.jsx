import { useState } from "react";
import "./ExportUsers.css";

function ExportUsers() {

    const [users, setUsers] = useState([

        {
            name: "Anupama",
            email: "anupama@gmail.com",
            role: "Admin",
            status: "Active",
        },

        {
            name: "Rahul",
            email: "rahul@gmail.com",
            role: "Recruiter",
            status: "Active",
        },

        {
            name: "Meera",
            email: "meera@gmail.com",
            role: "Job Seeker",
            status: "Inactive",
        },

    ]);

    // EXPORT FUNCTION

    const exportUsers = () => {

        const data = users.map((user) => {

            return `
Name: ${user.name}
Email: ${user.email}
Role: ${user.role}
Status: ${user.status}
-------------------------
`;

        }).join("");

        const blob = new Blob(
            [data],
            { type: "text/plain" }
        );

        const link = document.createElement("a");

        link.href = URL.createObjectURL(blob);

        link.download = "users-report.txt";

        link.click();

    };

    // TOGGLE STATUS

    const toggleStatus = (index) => {

        const updatedUsers = [...users];

        updatedUsers[index].status =
            updatedUsers[index].status === "Active"
                ? "Inactive"
                : "Active";

        setUsers(updatedUsers);

    };

    return (

        <div className="export-page">

            <div className="export-container">

                {/* HEADER */}

                <div className="top-header">

                    <div>

                        <h1>Export Users</h1>

                        <p>
                            Smart Resume Analyzer & Job Platform
                        </p>

                    </div>

                    <button
                        className="export-btn"
                        onClick={exportUsers}
                    >
                        Export Report
                    </button>

                </div>

                {/* STATS */}

                <div className="stats-grid">

                    <div className="stat-card">
                        <h2>1,248</h2>
                        <p>Total Users</p>
                    </div>

                    <div className="stat-card">
                        <h2>248</h2>
                        <p>Recruiters</p>
                    </div>

                    <div className="stat-card">
                        <h2>342</h2>
                        <p>Jobs Posted</p>
                    </div>

                    <div className="stat-card">
                        <h2>5,742</h2>
                        <p>Applications</p>
                    </div>

                </div>

                {/* SEARCH */}

                <input
                    type="text"
                    placeholder="Search users..."
                    className="search-box"
                />

                {/* TABLE */}

                <div className="table-card">

                    <table>

                        <thead>

                            <tr>
                                <th>User</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Status</th>
                            </tr>

                        </thead>

                        <tbody>

                            {users.map((user, index) => (

                                <tr key={index}>

                                    <td className="user-info">

                                        <div className="avatar">
                                            {user.name.charAt(0)}
                                        </div>

                                        {user.name}

                                    </td>

                                    <td>{user.email}</td>

                                    <td>{user.role}</td>

                                    <td>

                                        <button
                                            className={
                                                user.status === "Active"
                                                    ? "status active"
                                                    : "status inactive"
                                            }

                                            onClick={() => toggleStatus(index)}
                                        >
                                            {user.status}
                                        </button>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    );
}

export default ExportUsers;