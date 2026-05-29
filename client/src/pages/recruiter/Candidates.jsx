import "./Candidates.css";

function Candidates() {

    const candidates = [
        {
            id: 1,
            name: "Anupama",
            role: "Frontend Developer",
            experience: "2 Years Experience",
            skills: "React, UI Design, JavaScript",
            status: "Available",
            match: "92%",
            image:
                "https://randomuser.me/api/portraits/women/44.jpg",
        },

        {
            id: 2,
            name: "Rahul",
            role: "UI/UX Designer",
            experience: "3 Years Experience",
            skills: "Figma, Adobe XD, UX Research",
            status: "Interviewed",
            match: "88%",
            image:
                "https://randomuser.me/api/portraits/men/32.jpg",
        },

        {
            id: 3,
            name: "Sneha",
            role: "Backend Developer",
            experience: "4 Years Experience",
            skills: "Node.js, MongoDB, Express",
            status: "Hired",
            match: "95%",
            image:
                "https://randomuser.me/api/portraits/women/65.jpg",
        },

        {
            id: 4,
            name: "Arjun",
            role: "AI Engineer",
            experience: "5 Years Experience",
            skills: "Python, TensorFlow, ML",
            status: "Available",
            match: "97%",
            image:
                "https://randomuser.me/api/portraits/men/11.jpg",
        },
    ];

    const viewProfile = (name) => {
        alert(`Viewing ${name}'s profile`);
    };

    const shortlistCandidate = (name) => {
        alert(`${name} shortlisted successfully`);
    };

    const downloadResume = (name) => {
        alert(`Downloading ${name}'s resume`);
    };

    return (
        <div className="candidates-page">

            <div className="candidate-header">

                <div>
                    <h1>Candidates</h1>
                    <p>
                        Manage and review candidate profiles
                    </p>
                </div>

                <input
                    type="text"
                    placeholder="Search candidates..."
                    className="search-candidate"
                />

            </div>

            <div className="candidate-stats">

                <div className="candidate-stat-card">
                    <h2>124</h2>
                    <p>Total Candidates</p>
                </div>

                <div className="candidate-stat-card">
                    <h2>42</h2>
                    <p>Shortlisted</p>
                </div>

                <div className="candidate-stat-card">
                    <h2>18</h2>
                    <p>Interviews</p>
                </div>

                <div className="candidate-stat-card">
                    <h2>8</h2>
                    <p>Hired</p>
                </div>

            </div>

            <div className="candidate-grid">

                {candidates.map((candidate) => (

                    <div className="candidate-card" key={candidate.id}>

                        <div className="match-badge">
                            {candidate.match} Match
                        </div>

                        <img
                            src={candidate.image}
                            alt=""
                        />

                        <h2>{candidate.name}</h2>

                        <h4>{candidate.role}</h4>

                        <div className="candidate-info">
                            <p>{candidate.experience}</p>
                            <p>{candidate.skills}</p>
                        </div>

                        <span
                            className={`status ${candidate.status}`}
                        >
                            {candidate.status}
                        </span>

                        <div className="candidate-buttons">

                            <button
                                className="view-btn"
                                onClick={() =>
                                    viewProfile(candidate.name)
                                }
                            >
                                View Profile
                            </button>

                            <button
                                className="shortlist-btn"
                                onClick={() =>
                                    shortlistCandidate(candidate.name)
                                }
                            >
                                Shortlist
                            </button>

                            <button
                                className="resume-btn"
                                onClick={() =>
                                    downloadResume(candidate.name)
                                }
                            >
                                Resume
                            </button>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Candidates;