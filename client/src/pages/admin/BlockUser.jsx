import "./BlockUser.css";

function BlockUser() {

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
            status: "Active",
        },
    ];

    const exportReport = () => {

        const reportData = users.map((user) => {

            return `
Name: ${user.name}
Email: ${user.email}
Role: ${user.role}
Status: ${user.status}
-------------------------
`;

        }).join("");

        const blob = new Blob(
            [reportData],
            { type: "text/plain" }
        );

        const link = document.createElement("a");

        link.href = URL.createObjectURL(blob);

        link.download = "blocked-users-report.txt";

        link.click();

    };

    return (

        <div className="block-page">

            <div className="block-card">

                <div className="top-section">

                    <div>

                        <h1>Block Users</h1>

                        <p>
                            Manage and restrict platform users
                        </p>

                    </div>

                    <button
                        className="export-btn"
                        onClick={exportReport}
                    >
                        Export Report
                    </button>

                </div>

                <input
                    type="text"
                    placeholder="Search users..."
                    className="search-input"
                />

                <table>

                    <thead>

                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>

                    </thead>

                    <tbody>

                        {users.map((user, index) => (

                            <tr key={index}>

                                <td>{user.name}</td>

                                <td>{user.email}</td>

                                <td>{user.role}</td>

                                <td>

                                    <span className="status active">
                                        {user.status}
                                    </span>

                                </td>

                                <td>

                                    <button className="block-btn">
                                        Block
                                    </button>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    );
}

export default BlockUser;