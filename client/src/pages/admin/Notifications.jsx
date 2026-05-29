function Notifications() {

    const notifications = [
        {
            title: "New recruiter registered",
            time: "2 min ago",
            status: "Unread",
        },
        {
            title: "AI analysis completed",
            time: "10 min ago",
            status: "Read",
        },
        {
            title: "New job posted",
            time: "25 min ago",
            status: "Unread",
        },
        {
            title: "System backup completed",
            time: "1 hour ago",
            status: "Read",
        },
    ];

    return (

        <div>

            {/* TOP STATS */}

            <div className="stats-grid">

                <div className="stat-card">

                    <h3>Total Notifications</h3>

                    <h2>1,248</h2>

                </div>

                <div className="stat-card">

                    <h3>Unread</h3>

                    <h2>48</h2>

                </div>

                <div className="stat-card">

                    <h3>System Alerts</h3>

                    <h2>16</h2>

                </div>

                <div className="stat-card">

                    <h3>Messages Today</h3>

                    <h2>94</h2>

                </div>

            </div>

            {/* CONTENT */}

            <div className="content-grid">

                {/* LEFT */}

                <div className="left-section">

                    <div className="card">

                        <div className="card-header">

                            <h2>Recent Notifications</h2>

                            <button>Mark All Read</button>

                        </div>

                        <table>

                            <thead>

                                <tr>

                                    <th>Notification</th>
                                    <th>Time</th>
                                    <th>Status</th>

                                </tr>

                            </thead>

                            <tbody>

                                {notifications.map((item, index) => (

                                    <tr key={index}>

                                        <td>{item.title}</td>

                                        <td>{item.time}</td>

                                        <td>

                                            <span
                                                className={
                                                    item.status === "Unread"
                                                        ? "status inactive"
                                                        : "status active"
                                                }
                                            >

                                                {item.status}

                                            </span>

                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                    <div className="card">

                        <div className="card-header">

                            <h2>Notification Analytics</h2>

                            <button>View Details</button>

                        </div>

                        <div className="chart-container">

                            <div className="chart-circle">

                                <div className="chart-inner">

                                    <h1>94%</h1>

                                    <p>Delivery</p>

                                </div>

                            </div>

                            <div className="chart-details">

                                <p>
                                    <span className="dot blue"></span>
                                    Delivered - 94%
                                </p>

                                <p>
                                    <span className="dot green"></span>
                                    Read - 78%
                                </p>

                                <p>
                                    <span className="dot yellow"></span>
                                    Pending - 22%
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

                            <button>Send Broadcast</button>

                            <button>Create Alert</button>

                            <button>Email Users</button>

                            <button>Push Notification</button>

                        </div>

                    </div>

                    <div className="card">

                        <div className="card-header">

                            <h2>System Alerts</h2>

                            <button>Details</button>

                        </div>

                        <div className="system-stats">

                            <div className="stat-line">

                                <span>Security Alerts</span>

                                <span>4</span>

                            </div>

                            <div className="progress-bar">

                                <div className="progress"></div>

                            </div>

                            <div className="stat-line">

                                <span>Unread Messages</span>

                                <span>48</span>

                            </div>

                            <div className="progress-bar">

                                <div className="progress"></div>

                            </div>

                            <div className="stat-line">

                                <span>Delivery Success</span>

                                <span>94%</span>

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

export default Notifications;