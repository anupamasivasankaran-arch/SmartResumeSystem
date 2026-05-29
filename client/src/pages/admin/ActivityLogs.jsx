function ActivityLogs() {

    return (

        <div
            style={{
                padding: "40px",
                color: "white",
            }}
        >

            <h1>Activity Logs</h1>

            <table
                style={{
                    width: "100%",
                    marginTop: "20px",
                    borderCollapse: "collapse",
                }}
            >

                <thead>

                    <tr>

                        <th>User</th>
                        <th>Activity</th>
                        <th>Time</th>

                    </tr>

                </thead>

                <tbody>

                    <tr>
                        <td>Anupama</td>
                        <td>Added New Job</td>
                        <td>10:30 AM</td>
                    </tr>

                    <tr>
                        <td>Rahul</td>
                        <td>Updated Resume</td>
                        <td>11:15 AM</td>
                    </tr>

                    <tr>
                        <td>Admin</td>
                        <td>Blocked User</td>
                        <td>12:00 PM</td>
                    </tr>

                </tbody>

            </table>

        </div>
    );
}

export default ActivityLogs;