function Settings() {

    return (

        <div>

            {/* SETTINGS STATS */}

            <div className="stats-grid">

                <div className="stat-card">

                    <h3>System Health</h3>

                    <h2>98%</h2>

                </div>

                <div className="stat-card">

                    <h3>Active Modules</h3>

                    <h2>24</h2>

                </div>

                <div className="stat-card">

                    <h3>Security Level</h3>

                    <h2>High</h2>

                </div>

                <div className="stat-card">

                    <h3>Backups</h3>

                    <h2>12</h2>

                </div>

            </div>

            {/* SETTINGS CONTENT */}

            <div className="content-grid">

                {/* LEFT */}

                <div className="left-section">

                    <div className="card">

                        <div className="card-header">

                            <h2>Platform Settings</h2>

                            <button>Save Changes</button>

                        </div>

                        <table>

                            <thead>

                                <tr>

                                    <th>Setting</th>
                                    <th>Current Value</th>
                                    <th>Status</th>

                                </tr>

                            </thead>

                            <tbody>

                                <tr>

                                    <td>Email Notifications</td>
                                    <td>Enabled</td>

                                    <td>

                                        <span className="status active">

                                            Active

                                        </span>

                                    </td>

                                </tr>

                                <tr>

                                    <td>AI Resume Scan</td>
                                    <td>Enabled</td>

                                    <td>

                                        <span className="status active">

                                            Active

                                        </span>

                                    </td>

                                </tr>

                                <tr>

                                    <td>Maintenance Mode</td>
                                    <td>Disabled</td>

                                    <td>

                                        <span className="status inactive">

                                            Inactive

                                        </span>

                                    </td>

                                </tr>

                            </tbody>

                        </table>

                    </div>

                    <div className="card">

                        <div className="card-header">

                            <h2>Security Overview</h2>

                            <button>View Logs</button>

                        </div>

                        <div className="chart-container">

                            <div className="chart-circle">

                                <div className="chart-inner">

                                    <h1>99%</h1>

                                    <p>Secure</p>

                                </div>

                            </div>

                            <div className="chart-details">

                                <p>
                                    <span className="dot blue"></span>
                                    Firewall - Active
                                </p>

                                <p>
                                    <span className="dot green"></span>
                                    Authentication - Secure
                                </p>

                                <p>
                                    <span className="dot yellow"></span>
                                    Backups - Running
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

                            <button>Update Settings</button>

                            <button>Reset Passwords</button>

                            <button>Create Backup</button>

                            <button>Restart System</button>

                        </div>

                    </div>

                    <div className="card">

                        <div className="card-header">

                            <h2>System Usage</h2>

                            <button>Details</button>

                        </div>

                        <div className="system-stats">

                            <div className="stat-line">

                                <span>CPU Usage</span>

                                <span>72%</span>

                            </div>

                            <div className="progress-bar">

                                <div className="progress"></div>

                            </div>

                            <div className="stat-line">

                                <span>Memory Usage</span>

                                <span>64%</span>

                            </div>

                            <div className="progress-bar">

                                <div className="progress"></div>

                            </div>

                            <div className="stat-line">

                                <span>Server Load</span>

                                <span>48%</span>

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

export default Settings;