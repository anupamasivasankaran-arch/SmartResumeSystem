import "./SystemDetails.css";

function SystemDetails() {

    const handleExport = () => {

        const reportData = `
SYSTEM DETAILS REPORT

Smart Resume Analyzer & Job Recommendation System

----------------------------------------

Total Users: 1,248
Jobs Posted: 342
Server Health: 95%
Storage Used: 2.4TB

----------------------------------------

SERVER PERFORMANCE

CPU Usage: 72%
Memory Usage: 65%
Network Speed: 88%

----------------------------------------

PLATFORM OVERVIEW

Online Users: 842
Recruiters: 248
AI Accuracy: 96%
Monthly Growth: 18%

----------------------------------------

RECENT ACTIVITY

Anupama - Uploaded Resume - Success
Rahul - Posted New Job - Completed
Meera - Applied for Job - Pending
`;

        const blob = new Blob(
            [reportData],
            { type: "text/plain" }
        );

        const link = document.createElement("a");

        link.href = URL.createObjectURL(blob);

        link.download = "System_Report.txt";

        link.click();
    };

    return (

        <div className="system-page">

            <div className="system-container">

                {/* HEADER */}

                <div className="system-header">

                    <div>

                        <h1>System Details</h1>

                        <p>
                            Smart Resume Analyzer & Job Recommendation System
                        </p>

                    </div>

                    <button
                        className="system-btn"
                        onClick={handleExport}
                    >
                        Export Report
                    </button>

                </div>

                {/* TOP CARDS */}

                <div className="stats-grid">

                    <div className="stat-card">
                        <h2>1,248</h2>
                        <p>Total Users</p>
                    </div>

                    <div className="stat-card">
                        <h2>342</h2>
                        <p>Jobs Posted</p>
                    </div>

                    <div className="stat-card">
                        <h2>95%</h2>
                        <p>Server Health</p>
                    </div>

                    <div className="stat-card">
                        <h2>2.4TB</h2>
                        <p>Storage Used</p>
                    </div>

                </div>

                {/* MAIN GRID */}

                <div className="system-grid">

                    {/* SERVER PERFORMANCE */}

                    <div className="system-card">

                        <h2>Server Performance</h2>

                        <div className="progress-item">

                            <div className="progress-title">
                                <span>CPU Usage</span>
                                <span>72%</span>
                            </div>

                            <div className="progress-bar">
                                <div
                                    className="progress-fill"
                                    style={{ width: "72%" }}
                                ></div>
                            </div>

                        </div>

                        <div className="progress-item">

                            <div className="progress-title">
                                <span>Memory Usage</span>
                                <span>65%</span>
                            </div>

                            <div className="progress-bar">
                                <div
                                    className="progress-fill"
                                    style={{ width: "65%" }}
                                ></div>
                            </div>

                        </div>

                        <div className="progress-item">

                            <div className="progress-title">
                                <span>Network Speed</span>
                                <span>88%</span>
                            </div>

                            <div className="progress-bar">
                                <div
                                    className="progress-fill"
                                    style={{ width: "88%" }}
                                ></div>
                            </div>

                        </div>

                    </div>

                    {/* PLATFORM OVERVIEW */}

                    <div className="system-card">

                        <h2>Platform Overview</h2>

                        <div className="overview-grid">

                            <div className="overview-box">
                                <h3>842</h3>
                                <p>Online Users</p>
                            </div>

                            <div className="overview-box">
                                <h3>248</h3>
                                <p>Recruiters</p>
                            </div>

                            <div className="overview-box">
                                <h3>96%</h3>
                                <p>AI Accuracy</p>
                            </div>

                            <div className="overview-box">
                                <h3>18%</h3>
                                <p>Monthly Growth</p>
                            </div>

                        </div>

                    </div>

                </div>

                {/* RECENT ACTIVITY */}

                <div className="activity-card">

                    <h2>Recent Activity</h2>

                    <table>

                        <thead>

                            <tr>
                                <th>User</th>
                                <th>Action</th>
                                <th>Status</th>
                                <th>Time</th>
                            </tr>

                        </thead>

                        <tbody>

                            <tr>

                                <td>Anupama</td>
                                <td>Uploaded Resume</td>

                                <td>
                                    <span className="active-status">
                                        Success
                                    </span>
                                </td>

                                <td>2 mins ago</td>

                            </tr>

                            <tr>

                                <td>Rahul</td>
                                <td>Posted New Job</td>

                                <td>
                                    <span className="active-status">
                                        Completed
                                    </span>
                                </td>

                                <td>10 mins ago</td>

                            </tr>

                            <tr>

                                <td>Meera</td>
                                <td>Applied for Job</td>

                                <td>
                                    <span className="inactive-status">
                                        Pending
                                    </span>
                                </td>

                                <td>25 mins ago</td>

                            </tr>

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    );
}

export default SystemDetails;