import { useNavigate } from "react-router-dom";

function Users() {

    const navigate = useNavigate();

    const users = [
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
    ];

    return (

        <div>

            {/* TOP STATS */}

            <div className="stats-grid">

                <div className="stat-card">
                    <h3>Total Users</h3>
                    <h2>1,248</h2>
                </div>

                <div className="stat-card">
                    <h3>Recruiters</h3>
                    <h2>248</h2>
                </div>

                <div className="stat-card">
                    <h3>Job Seekers</h3>
                    <h2>924</h2>
                </div>

                <div className="stat-card">
                    <h3>Admins</h3>
                    <h2>76</h2>
                </div>

            </div>

            {/* CONTENT */}

            <div className="content-grid">

                {/* LEFT */}

                <div className="left-section">

                    <div className="card">

                        <div className="card-header">

                            <h2>Users Management</h2>

                            <button
                                onClick={() => navigate("/admin/add-user")}
                            >

                                Add User

                            </button>

                        </div>

                        <table>

                            <thead>

                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Status</th>
                                </tr>

                            </thead>

                            <tbody>

                                {users.map((user, index) => (

                                    <tr key={index}>

                                        <td>{user.name}</td>

                                        <td>{user.email}</td>

                                        <td>{user.role}</td>

                                        <td>

                                            <span
                                                className={
                                                    user.status === "Active"
                                                        ? "status active"
                                                        : "status inactive"
                                                }
                                            >

                                                {user.status}

                                            </span>

                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                    <div className="card">

                        <div className="card-header">

                            <h2>User Analytics</h2>

                            <button
                                onClick={() => navigate("/admin/export-analytics")}
                            >

                                Export

                            </button>

                        </div>

                        <div className="chart-container">

                            <div className="chart-circle">

                                <div className="chart-inner">

                                    <h1>82%</h1>

                                    <p>Growth</p>

                                </div>

                            </div>

                            <div className="chart-details">

                                <p>
                                    <span className="dot blue"></span>
                                    Active Users - 82%
                                </p>

                                <p>
                                    <span className="dot green"></span>
                                    Recruiters - 20%
                                </p>

                                <p>
                                    <span className="dot yellow"></span>
                                    Admins - 8%
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                {/* RIGHT */}

                <div className="right-section">

                    <div className="card">

                        <div className="card-header">

                            <h2>Quick Actions</h2>

                        </div>

                        <div className="actions">

                            <button
                                onClick={() => navigate("/admin/add-recruiter")}
                            >

                                Add Recruiter

                            </button>

                            <button
                                onClick={() => navigate("/admin/block-user")}
                            >

                                Block User

                            </button>

                            <button
                                onClick={() => navigate("/admin/export-users")}
                            >

                                Export Users

                            </button>

                            <button
                                onClick={() => navigate("/admin/generate-report")}
                            >

                                Generate Report

                            </button>

                        </div>

                    </div>

                    <div className="card">

                        <div className="card-header">

                            <h2>System Overview</h2>

                            <button
                                onClick={() => navigate("/admin/system-details")}
                            >

                                Details

                            </button>

                        </div>

                        <div className="system-stats">

                            <div className="stat-line">

                                <span>Online Users</span>

                                <span>842</span>

                            </div>

                            <div className="progress-bar">

                                <div className="progress"></div>

                            </div>

                            <div className="stat-line">

                                <span>Daily Registrations</span>

                                <span>48</span>

                            </div>

                            <div className="progress-bar">

                                <div className="progress"></div>

                            </div>

                            <div className="stat-line">

                                <span>Verification Rate</span>

                                <span>96%</span>

                            </div>

                            <div className="progress-bar">

                                <div className="progress"></div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Users;