import "./Applications.css";

function Applications() {

    const applications = [

        {
            id: 1,
            name: "Anupama",
            role: "Frontend Developer",
            experience: "2 Years",
            skills: "React, UI Design, JavaScript",
            status: "Applied",
            match: "92%",
            image: "https://randomuser.me/api/portraits/women/44.jpg"
        },

        {
            id: 2,
            name: "Rahul",
            role: "UI/UX Designer",
            experience: "3 Years",
            skills: "Figma, Adobe XD",
            status: "Reviewing",
            match: "88%",
            image: "https://randomuser.me/api/portraits/men/32.jpg"
        },

        {
            id: 3,
            name: "Sneha",
            role: "Backend Developer",
            experience: "4 Years",
            skills: "Node.js, MongoDB",
            status: "Interview Scheduled",
            match: "95%",
            image: "https://randomuser.me/api/portraits/women/65.jpg"
        },

        {
            id: 4,
            name: "Arjun",
            role: "AI Engineer",
            experience: "5 Years",
            skills: "Python, TensorFlow",
            status: "Shortlisted",
            match: "97%",
            image: "https://randomuser.me/api/portraits/men/11.jpg"
        }

    ];

    const acceptApplication = (candidate) => {

        const accepted =
            JSON.parse(
                localStorage.getItem(
                    "acceptedApplications"
                )
            ) || [];

        accepted.push({
            ...candidate,
            status: "Shortlisted",
            date: new Date().toLocaleDateString(),
        });

        localStorage.setItem(
            "acceptedApplications",
            JSON.stringify(accepted)
        );

        alert(
            `${candidate.name} shortlisted successfully`
        );
    };

    const rejectApplication = (candidate) => {

        const rejected =
            JSON.parse(
                localStorage.getItem(
                    "rejectedApplications"
                )
            ) || [];

        rejected.push({
            ...candidate,
            status: "Rejected",
            date: new Date().toLocaleDateString(),
        });

        localStorage.setItem(
            "rejectedApplications",
            JSON.stringify(rejected)
        );

        alert(`${candidate.name} rejected`);
    };

    const scheduleInterview = (candidate) => {

        const interviews =
            JSON.parse(
                localStorage.getItem(
                    "scheduledInterviews"
                )
            ) || [];

        interviews.push({
            ...candidate,
            status: "Interview Scheduled",
            date: new Date().toLocaleDateString(),
        });

        localStorage.setItem(
            "scheduledInterviews",
            JSON.stringify(interviews)
        );

        alert(
            `Interview scheduled for ${candidate.name}`
        );
    };

    const viewResume = (candidate) => {

        alert(
            `Opening resume of ${candidate.name}`
        );

    };

    return (

        <div className="applications-page">

            <div className="applications-header">

                <div>

                    <h1>
                        Applications ({applications.length})
                    </h1>

                    <p>
                        Review and manage candidate applications
                    </p>

                </div>

                <input
                    type="text"
                    placeholder="Search applications..."
                    className="search-application"
                />

            </div>

            <div className="applications-stats">

                <div className="app-stat-card">
                    <h2>248</h2>
                    <p>Total Applications</p>
                </div>

                <div className="app-stat-card">
                    <h2>76</h2>
                    <p>Shortlisted</p>
                </div>

                <div className="app-stat-card">
                    <h2>21</h2>
                    <p>Interviews</p>
                </div>

                <div className="app-stat-card">
                    <h2>12</h2>
                    <p>Hired</p>
                </div>

            </div>

            <div className="applications-grid">

                {applications.map((app) => (

                    <div
                        className="application-card"
                        key={app.id}
                    >

                        <div className="match-score">
                            {app.match} Match
                        </div>

                        <img
                            src={app.image}
                            alt=""
                        />

                        <h2>{app.name}</h2>

                        <h4>{app.role}</h4>

                        <div className="application-info">

                            <p>
                                <strong>Experience:</strong>
                                {" "}
                                {app.experience}
                            </p>

                            <p>
                                <strong>Skills:</strong>
                                {" "}
                                {app.skills}
                            </p>

                        </div>

                        <span
                            className={`status-badge ${app.status}`}
                        >
                            {app.status}
                        </span>

                        <div className="application-buttons">

                            <button
                                className="view-btn"
                                onClick={() =>
                                    viewResume(app)
                                }
                            >
                                Resume
                            </button>

                            <button
                                className="accept-btn"
                                onClick={() =>
                                    acceptApplication(app)
                                }
                            >
                                Shortlist
                            </button>

                            <button
                                className="interview-btn"
                                onClick={() =>
                                    scheduleInterview(app)
                                }
                            >
                                Interview
                            </button>

                            <button
                                className="reject-btn"
                                onClick={() =>
                                    rejectApplication(app)
                                }
                            >
                                Reject
                            </button>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );

}

export default Applications;