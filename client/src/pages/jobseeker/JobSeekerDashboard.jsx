import "./JobSeeker.css";

function JobSeekerDashboard() {

    return (

        <div className="pro-dashboard">

            {/* TOP NAVBAR */}

            <div className="top-navbar">

                <div className="search-box">

                    <input
                        type="text"
                        placeholder="Search jobs, companies, skills..."
                    />

                </div>

                <div className="top-navbar-right">

                    <div className="top-icon">
                        💬
                        <span className="icon-dot"></span>
                    </div>

                    <div className="top-icon">
                        🔔
                        <span className="icon-dot"></span>
                    </div>

                    <div className="top-profile">

                        <img
                            src="https://i.pravatar.cc/150?img=12"
                            alt=""
                        />

                    </div>

                </div>

            </div>

            {/* HERO */}

            <div className="dashboard-hero">

                <div>

                    <h1>Welcome Back 👋</h1>

                    <p>
                        Track applications, discover jobs and manage your career.
                    </p>

                </div>

                <button className="hero-btn">
                    Explore Jobs
                </button>

            </div>

            {/* STATS */}

            <div className="dashboard-stats">

                <div className="stat-card">

                    <div className="stat-icon">💼</div>

                    <div>

                        <h2>24</h2>

                        <p>Available Jobs</p>

                    </div>

                </div>

                <div className="stat-card">

                    <div className="stat-icon">📄</div>

                    <div>

                        <h2>8</h2>

                        <p>Applied Jobs</p>

                    </div>

                </div>

                <div className="stat-card">

                    <div className="stat-icon">💖</div>

                    <div>

                        <h2>12</h2>

                        <p>Saved Jobs</p>

                    </div>

                </div>

                <div className="stat-card">

                    <div className="stat-icon">🚀</div>

                    <div>

                        <h2>92%</h2>

                        <p>ATS Score</p>

                    </div>

                </div>

            </div>

            {/* MAIN GRID */}

            <div className="dashboard-main-grid">

                {/* LEFT */}

                <div className="dashboard-box">

                    <div className="box-header">

                        <h2>Recent Applications</h2>

                    </div>

                    <div className="recent-job-row">

                        <div>

                            <h3>Frontend Developer</h3>

                            <p>Google • Remote</p>

                        </div>

                        <button className="mini-status-btn">
                            Pending
                        </button>

                    </div>

                    <div className="recent-job-row">

                        <div>

                            <h3>UI/UX Designer</h3>

                            <p>Microsoft • Bangalore</p>

                        </div>

                        <button className="mini-status-btn">
                            Reviewed
                        </button>

                    </div>

                    <div className="recent-job-row">

                        <div>

                            <h3>React Developer</h3>

                            <p>Infosys • Kochi</p>

                        </div>

                        <button className="mini-status-btn">
                            Shortlisted
                        </button>

                    </div>

                </div>

                {/* RIGHT */}

                <div className="dashboard-profile-card">

                    <img
                        src="https://i.pravatar.cc/200?img=15"
                        alt=""
                    />

                    <h2>Profile Strength</h2>

                    <p>Frontend Developer</p>

                    <div className="profile-progress">

                        <div className="progress-top">

                            <span>Profile Completion</span>

                            <span>85%</span>

                        </div>

                        <div className="progress-bar">

                            <div className="progress-fill"></div>

                        </div>

                    </div>

                    <button className="profile-btn">
                        Update Profile
                    </button>

                </div>

            </div>

            {/* QUICK ACTIONS */}

            <div className="quick-actions">

                <div className="action-card">
                    📤
                    <h3>Upload Resume</h3>
                </div>

                <div className="action-card">
                    🔎
                    <h3>Find Jobs</h3>
                </div>

                <div className="action-card">
                    💬
                    <h3>Messages</h3>
                </div>

                <div className="action-card">
                    ⚙️
                    <h3>Settings</h3>
                </div>

            </div>

        </div>

    );

}

export default JobSeekerDashboard;