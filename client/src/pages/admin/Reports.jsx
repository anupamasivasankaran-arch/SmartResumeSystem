function Reports() {

    return (

        <div>

            {/* REPORT STATS */}

            <div className="stats-grid">

                <div className="stat-card">

                    <h3>Total Reports</h3>

                    <h2>248</h2>

                </div>

                <div className="stat-card">

                    <h3>Monthly Reports</h3>

                    <h2>48</h2>

                </div>

                <div className="stat-card">

                    <h3>Downloads</h3>

                    <h2>1,842</h2>

                </div>

                <div className="stat-card">

                    <h3>Generated Today</h3>

                    <h2>16</h2>

                </div>

            </div>

            {/* REPORT CONTENT */}

            <div className="content-grid">

                {/* LEFT */}

                <div className="left-section">

                    <div className="card">

                        <div className="card-header">

                            <h2>Platform Reports</h2>

                            <button>Generate Report</button>

                        </div>

                        <table>

                            <thead>

                                <tr>

                                    <th>Report Name</th>
                                    <th>Category</th>
                                    <th>Date</th>
                                    <th>Status</th>

                                </tr>

                            </thead>

                            <tbody>

                                <tr>

                                    <td>User Analytics</td>
                                    <td>Users</td>
                                    <td>12 Aug 2026</td>

                                    <td>

                                        <span className="status active">

                                            Completed

                                        </span>

                                    </td>

                                </tr>

                                <tr>

                                    <td>AI Performance</td>
                                    <td>Analytics</td>
                                    <td>11 Aug 2026</td>

                                    <td>

                                        <span className="status active">

                                            Completed

                                        </span>

                                    </td>

                                </tr>

                                <tr>

                                    <td>Job Statistics</td>
                                    <td>Jobs</td>
                                    <td>10 Aug 2026</td>

                                    <td>

                                        <span className="status inactive">

                                            Pending

                                        </span>

                                    </td>

                                </tr>

                            </tbody>

                        </table>

                    </div>

                    <div className="card">

                        <div className="card-header">

                            <h2>Monthly Performance</h2>

                            <button>Export</button>

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
                                    User Growth - 82%
                                </p>

                                <p>
                                    <span className="dot green"></span>
                                    Jobs Posted - 74%
                                </p>

                                <p>
                                    <span className="dot yellow"></span>
                                    AI Usage - 91%
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

                            <button>Create Report</button>

                            <button>Download PDF</button>

                            <button>Export Excel</button>

                            <button>Schedule Reports</button>

                        </div>

                    </div>

                    <div className="card">

                        <div className="card-header">

                            <h2>Storage Usage</h2>

                            <button>Details</button>

                        </div>

                        <div className="system-stats">

                            <div className="stat-line">

                                <span>Reports Storage</span>

                                <span>64GB</span>

                            </div>

                            <div className="progress-bar">

                                <div className="progress"></div>

                            </div>

                            <div className="stat-line">

                                <span>Cloud Backup</span>

                                <span>82%</span>

                            </div>

                            <div className="progress-bar">

                                <div className="progress"></div>

                            </div>

                            <div className="stat-line">

                                <span>Downloads</span>

                                <span>1.8K</span>

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

export default Reports;