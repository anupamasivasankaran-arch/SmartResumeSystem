import "./RecommendedJobs.css";

import { useNavigate } from "react-router-dom";

function RecommendedJobs() {

    const navigate = useNavigate();

    const jobs = [

        {
            title: "Frontend Developer",
            company: "Google",
            location: "Remote",
            salary: "₹12 LPA",
            type: "Full Time",
            logo: "https://cdn-icons-png.flaticon.com/512/300/300221.png"
        },

        {
            title: "UI/UX Designer",
            company: "Microsoft",
            location: "Bangalore",
            salary: "₹10 LPA",
            type: "Hybrid",
            logo: "https://cdn-icons-png.flaticon.com/512/732/732221.png"
        },

        {
            title: "React Developer",
            company: "Infosys",
            location: "Kochi",
            salary: "₹8 LPA",
            type: "Remote",
            logo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
        },

        {
            title: "Backend Engineer",
            company: "Amazon",
            location: "Hyderabad",
            salary: "₹15 LPA",
            type: "Full Time",
            logo: "https://cdn-icons-png.flaticon.com/512/5968/5968870.png"
        }

    ];

    return (

        <div className="recommended-page">

            {/* TOP */}

            <div className="recommended-top">

                <div>

                    <h1>Recommended Jobs</h1>

                    <p>
                        AI matched opportunities for your profile
                    </p>

                </div>

                <input
                    type="text"
                    placeholder="Search jobs..."
                    className="recommended-search"
                />

            </div>

            {/* GRID */}

            <div className="recommended-grid">

                {jobs.map((job, index) => (

                    <div
                        className="professional-job-card"
                        key={index}
                    >

                        {/* TOP */}

                        <div className="job-card-top">

                            <img
                                src={job.logo}
                                alt=""
                            />

                            <div>

                                <h2>{job.title}</h2>

                                <h4>{job.company}</h4>

                            </div>

                        </div>

                        {/* INFO */}

                        <div className="job-info-row">

                            <span>📍 {job.location}</span>

                            <span>💰 {job.salary}</span>

                        </div>

                        {/* TYPE */}

                        <div className="job-type">

                            {job.type}

                        </div>

                        {/* BUTTONS */}

                        <div className="job-buttons">

                            <button
                                className="apply-btn"
                                onClick={() =>
                                    navigate("/jobseeker/applied-jobs")
                                }
                            >
                                Apply Now
                            </button>

                            <button
                                className="save-btn"
                                onClick={() =>
                                    navigate("/jobseeker/saved-jobs")
                                }
                            >
                                Save
                            </button>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );

}

export default RecommendedJobs;