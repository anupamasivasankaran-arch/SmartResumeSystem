import "./ApplicationDetails.css";

function ApplicationDetails() {

    return (

        <div className="application-details-page">

            {/* HEADER */}

            <div className="details-header">

                <div>

                    <h1>Application Details</h1>

                    <p>
                        Complete information about your job application
                    </p>

                </div>

                <button
                    className="status-btn"
                    onClick={() =>
                        alert(
                            "Your application is currently under review by the recruiter."
                        )
                    }
                >
                    Under Review
                </button>

            </div>

            {/* MAIN CARD */}

            <div className="details-card">

                {/* COMPANY */}

                <div className="company-section">

                    <div className="company-logo-box">

                        <img
                            src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
                            alt=""
                        />

                    </div>

                    <div>

                        <h2>Frontend Developer</h2>

                        <h3>Google</h3>

                        <div className="company-meta">

                            <span>📍 Remote</span>

                            <span>💰 ₹12 LPA</span>

                            <span>🕒 Full Time</span>

                        </div>

                    </div>

                </div>

                {/* GRID */}

                <div className="details-grid">

                    {/* LEFT */}

                    <div>

                        <div className="info-card">

                            <h4>Application Timeline</h4>

                            <div className="timeline">

                                <div className="timeline-item active">

                                    <div className="dot"></div>

                                    <div>

                                        <h5>Application Submitted</h5>

                                        <p>May 20, 2026</p>

                                    </div>

                                </div>

                                <div className="timeline-item active">

                                    <div className="dot"></div>

                                    <div>

                                        <h5>Resume Reviewed</h5>

                                        <p>May 22, 2026</p>

                                    </div>

                                </div>

                                <div className="timeline-item">

                                    <div className="dot"></div>

                                    <div>

                                        <h5>Technical Interview</h5>

                                        <p>Pending</p>

                                    </div>

                                </div>

                                <div className="timeline-item">

                                    <div className="dot"></div>

                                    <div>

                                        <h5>Final HR Discussion</h5>

                                        <p>Pending</p>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="info-card">

                            <h4>Job Description</h4>

                            <p>
                                We are looking for a skilled Frontend Developer
                                with strong React.js knowledge to build modern,
                                scalable and responsive web applications.
                            </p>

                        </div>

                    </div>

                    {/* RIGHT */}

                    <div>

                        <div className="info-card">

                            <h4>Your Resume Score</h4>

                            <div className="score-circle">

                                92%

                            </div>

                            <p className="score-text">

                                Excellent ATS compatibility

                            </p>

                        </div>

                        <div className="info-card">

                            <h4>Recruiter Notes</h4>

                            <p>
                                Your profile matches the job requirements well.
                                The recruiter will contact you soon for the
                                next interview round.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default ApplicationDetails;