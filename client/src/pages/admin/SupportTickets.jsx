function SupportTickets() {

    const tickets = [
        {
            user: "Anupama",
            issue: "Login issue",
            priority: "High",
            status: "Open",
        },
        {
            user: "Rahul",
            issue: "Resume upload failed",
            priority: "Medium",
            status: "Pending",
        },
        {
            user: "Meera",
            issue: "AI analysis error",
            priority: "Low",
            status: "Resolved",
        },
    ];

    return (

        <div>

            {/* TOP STATS */}

            <div className="stats-grid">

                <div className="stat-card">

                    <h3>Total Tickets</h3>

                    <h2>248</h2>

                </div>

                <div className="stat-card">

                    <h3>Open Tickets</h3>

                    <h2>34</h2>

                </div>

                <div className="stat-card">

                    <h3>Resolved</h3>

                    <h2>182</h2>

                </div>

                <div className="stat-card">

                    <h3>Pending</h3>

                    <h2>32</h2>

                </div>

            </div>

            {/* CONTENT */}

            <div className="content-grid">

                {/* LEFT */}

                <div className="left-section">

                    <div className="card">

                        <div className="card-header">

                            <h2>Recent Support Tickets</h2>

                            <button>View All</button>

                        </div>

                        <table>

                            <thead>

                                <tr>

                                    <th>User</th>
                                    <th>Issue</th>
                                    <th>Priority</th>
                                    <th>Status</th>

                                </tr>

                            </thead>

                            <tbody>

                                {tickets.map((ticket, index) => (

                                    <tr key={index}>

                                        <td>{ticket.user}</td>

                                        <td>{ticket.issue}</td>

                                        <td>{ticket.priority}</td>

                                        <td>

                                            <span
                                                className={
                                                    ticket.status === "Resolved"
                                                        ? "status active"
                                                        : "status inactive"
                                                }
                                            >

                                                {ticket.status}

                                            </span>

                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                    <div className="card">

                        <div className="card-header">

                            <h2>Support Analytics</h2>

                            <button>Export</button>

                        </div>

                        <div className="chart-container">

                            <div className="chart-circle">

                                <div className="chart-inner">

                                    <h1>87%</h1>

                                    <p>Resolved</p>

                                </div>

                            </div>

                            <div className="chart-details">

                                <p>
                                    <span className="dot blue"></span>
                                    Resolved - 87%
                                </p>

                                <p>
                                    <span className="dot green"></span>
                                    Pending - 9%
                                </p>

                                <p>
                                    <span className="dot yellow"></span>
                                    Open - 4%
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

                            <button>Create Ticket</button>

                            <button>Assign Support</button>

                            <button>Close Tickets</button>

                            <button>Generate Report</button>

                        </div>

                    </div>

                    <div className="card">

                        <div className="card-header">

                            <h2>System Overview</h2>

                            <button>Details</button>

                        </div>

                        <div className="system-stats">

                            <div className="stat-line">

                                <span>Response Rate</span>

                                <span>92%</span>

                            </div>

                            <div className="progress-bar">

                                <div className="progress"></div>

                            </div>

                            <div className="stat-line">

                                <span>Avg Response</span>

                                <span>12 min</span>

                            </div>

                            <div className="progress-bar">

                                <div className="progress"></div>

                            </div>

                            <div className="stat-line">

                                <span>User Satisfaction</span>

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

export default SupportTickets;