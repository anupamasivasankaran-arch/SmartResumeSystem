import "./AdminDashboard.css";

function AdminDashboard() {

    return (

        <div className="admin-dashboard">

            {/* SIDEBAR */}

            <div className="sidebar">

                {/* LOGO */}

                <div className="logo">

                    <img
                        src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
                        alt=""
                    />

                    <h2>ResumeAI</h2>

                    <p>Enterprise Admin</p>

                </div>

                {/* MENU */}

                <div className="menu">

                    <a href="/admin" className="active">
                        🏠 <span>Dashboard</span>
                    </a>

                    <a href="/admin/users">
                        👥 <span>User Management</span>
                    </a>

                    <a href="/admin/jobs">
                        💼 <span>Jobs Management</span>
                    </a>

                    <a href="/admin/companies">
                        🏢 <span>Companies</span>
                    </a>

                    <a href="/admin/applications">
                        📄 <span>Applications</span>
                    </a>

                    <a href="/admin/resumes">
                        📂 <span>Resumes</span>
                    </a>

                    <a href="/admin/ai-analytics">
                        🤖 <span>AI Analytics</span>
                    </a>

                    <a href="/admin/reports">
                        📊 <span>Reports & Analytics</span>
                    </a>



                    <a href="/admin/notifications">
                        🔔 <span>Notifications</span>
                    </a>

                    <a href="/admin/settings">
                        ⚙️ <span>System Settings</span>
                    </a>


                    {/* LOGOUT */}

                    <a href="/login" className="logout-btn">
                        🚪 <span>Logout</span>
                    </a>

                </div>

            </div>

            {/* MAIN CONTENT */}

            <div className="main-content">

                {/* TOPBAR */}

                <div className="topbar">

                    <div className="search-box">

                        <input
                            type="text"
                            placeholder="Search users, jobs, companies..."
                        />

                    </div>

                    <div className="profile">

                        <div className="notification">
                            🔔
                        </div>

                        <img
                            src="https://i.pravatar.cc/100"
                            alt=""
                        />

                        <div>
                            <h4>Admin</h4>
                            <p>Super Admin</p>
                        </div>

                    </div>

                </div>

                {/* PAGE TITLE */}

                <div className="page-title">

                    <h1>Admin Dashboard</h1>

                    <p>Overview of platform activities</p>

                </div>

                {/* STATS */}

                <div className="stats-grid">

                    <div className="stat-card">
                        <h3>Total Users</h3>
                        <h2>1,248</h2>
                    </div>

                    <div className="stat-card">
                        <h3>Jobs Posted</h3>
                        <h2>342</h2>
                    </div>

                    <div className="stat-card">
                        <h3>Resumes</h3>
                        <h2>2,853</h2>
                    </div>

                    <div className="stat-card">
                        <h3>Applications</h3>
                        <h2>5,742</h2>
                    </div>

                </div>

                {/* CONTENT GRID */}

                <div className="content-grid">

                    {/* LEFT */}

                    <div className="left-section">

                        {/* USERS ANALYTICS */}

                        <div className="card">

                            <div className="card-header">

                                <h2>Users Analytics</h2>

                                <button>Export</button>

                            </div>

                            <div className="chart-container">

                                <div className="chart-circle">

                                    <div className="chart-inner">

                                        <h1>1,248</h1>

                                        <p>Users</p>

                                    </div>

                                </div>

                                <div className="chart-details">

                                    <p>
                                        <span className="dot blue"></span>
                                        Job Seekers - 72%
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

                        {/* RECENT USERS */}

                        <div className="card">

                            <div className="card-header">

                                <h2>Recent Users</h2>

                                <button>View All</button>

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

                                    <tr>
                                        <td>Anupama</td>
                                        <td>anu@gmail.com</td>
                                        <td>Job Seeker</td>
                                        <td>
                                            <span className="status active">
                                                Active
                                            </span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>Rahul</td>
                                        <td>rahul@gmail.com</td>
                                        <td>Recruiter</td>
                                        <td>
                                            <span className="status active">
                                                Active
                                            </span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>Meera</td>
                                        <td>meera@gmail.com</td>
                                        <td>Recruiter</td>
                                        <td>
                                            <span className="status inactive">
                                                Inactive
                                            </span>
                                        </td>
                                    </tr>

                                </tbody>

                            </table>

                        </div>

                        {/* RECENT JOBS */}

                        <div className="card">

                            <div className="card-header">

                                <h2>Recent Job Postings</h2>

                                <button>Manage Jobs</button>

                            </div>

                            <table>

                                <thead>

                                    <tr>
                                        <th>Job</th>
                                        <th>Company</th>
                                        <th>Status</th>
                                    </tr>

                                </thead>

                                <tbody>

                                    <tr>
                                        <td>Frontend Developer</td>
                                        <td>Tech Solutions</td>
                                        <td>
                                            <span className="status active">
                                                Active
                                            </span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>UI/UX Designer</td>
                                        <td>CreativeX</td>
                                        <td>
                                            <span className="status active">
                                                Active
                                            </span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>Python Developer</td>
                                        <td>CodeCraft</td>
                                        <td>
                                            <span className="status inactive">
                                                Closed
                                            </span>
                                        </td>
                                    </tr>

                                </tbody>

                            </table>

                        </div>

                    </div>

                    {/* RIGHT */}

                    <div className="right-section">

                        {/* QUICK ACTIONS */}

                        <div className="card">

                            <div className="card-header">

                                <h2>Quick Actions</h2>

                            </div>

                            <div className="actions">

                                <button>Add New Job</button>

                                <button>Add Company</button>

                                <button>Manage Users</button>

                                <button>View Reports</button>

                            </div>

                        </div>

                        {/* SYSTEM STATS */}

                        <div className="card">

                            <div className="card-header">

                                <h2>System Statistics</h2>

                                <button>Details</button>

                            </div>

                            <div className="system-stats">

                                <div className="stat-line">
                                    <span>Total Visits</span>
                                    <span>18,542</span>
                                </div>

                                <div className="stat-line">
                                    <span>Successful Logins</span>
                                    <span>12,846</span>
                                </div>

                                <div className="stat-line">
                                    <span>AI Analyses</span>
                                    <span>3,672</span>
                                </div>

                                <div className="stat-line">
                                    <span>Storage Used</span>
                                    <span>68GB / 200GB</span>
                                </div>

                                <div className="progress-bar">

                                    <div className="progress"></div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default AdminDashboard;