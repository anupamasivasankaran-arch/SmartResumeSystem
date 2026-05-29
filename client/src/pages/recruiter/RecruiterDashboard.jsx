import "./RecruiterDashboard.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function RecruiterDashboard() {

    const navigate = useNavigate();

    /* JOB STATES */

    const [jobTitle, setJobTitle] =
        useState("");

    const [companyName, setCompanyName] =
        useState("");

    const [location, setLocation] =
        useState("");

    /* POST JOB */

    const postJob = () => {

        const jobs =
            JSON.parse(
                localStorage.getItem("jobs")
            ) || [];

        const newJob = {

            title: jobTitle,

            company: companyName,

            location: location

        };

        jobs.push(newJob);

        localStorage.setItem(
            "jobs",
            JSON.stringify(jobs)
        );

        alert("Job Posted Successfully");

        setJobTitle("");
        setCompanyName("");
        setLocation("");

    };

    /* COMPANIES */

    const companies = [

        {
            name: "HireAI Technologies",
            location: "Bangalore, India",
            role: "Senior Recruiter",
            jobs: 24,
            applications: 140,
            interviews: 16,
            success: "89%",
            image:
                "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        },

        {
            name: "TechNova Solutions",
            location: "Kochi, India",
            role: "Hiring Manager",
            jobs: 12,
            applications: 82,
            interviews: 9,
            success: "74%",
            image:
                "https://cdn-icons-png.flaticon.com/512/6997/6997662.png",
        },

        {
            name: "CloudNet Systems",
            location: "Hyderabad, India",
            role: "Technical Recruiter",
            jobs: 31,
            applications: 201,
            interviews: 27,
            success: "91%",
            image:
                "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
        },

    ];

    return (

        <div className="recruiter-dashboard">

            {/* SIDEBAR */}

            <div className="sidebar">

                <div className="sidebar-top">

                    <h1 className="logo">
                        HireAI
                    </h1>

                    <p className="workspace-text">
                        Recruiter Workspace
                    </p>

                    <ul className="sidebar-menu">

                        <li
                            onClick={() =>
                                navigate("/recruiter")
                            }
                        >
                            🏠 Dashboard
                        </li>

                        <li>
                            🏢 My Companies
                        </li>

                        <li
                            onClick={() =>
                                navigate("/recruiter/post-jobs")
                            }
                        >
                            📄 Post Jobs
                        </li>

                        <li
                            onClick={() =>
                                navigate("/recruiter/candidates")
                            }
                        >
                            👨‍💼 Candidates
                        </li>

                        <li
                            onClick={() =>
                                navigate("/recruiter/applications")
                            }
                        >
                            📥 Applications
                        </li>

                        <li
                            onClick={() =>
                                navigate("/recruiter/interviews")
                            }
                        >
                            📅 Interviews
                        </li>

                        <li
                            onClick={() =>
                                navigate("/recruiter/analytics")
                            }
                        >
                            📊 Analytics
                        </li>



                        <li
                            onClick={() =>
                                navigate("/recruiter/company-profile")
                            }
                        >
                            ⚙ Company Profile
                        </li>

                    </ul>

                </div>

                <div className="sidebar-bottom">

                    <button
                        className="logout-btn"
                        onClick={() =>
                            navigate("/login")
                        }
                    >
                        Logout
                    </button>

                </div>

            </div>

            {/* MAIN */}

            <div className="main-content">

                {/* TOPBAR */}

                <div className="topbar">

                    <input
                        type="text"
                        placeholder="Search companies, jobs, candidates..."
                        className="search-bar"
                    />

                    <div className="topbar-right">

                        <div className="notification">
                            🔔
                        </div>

                        <div className="profile">

                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                                alt=""
                            />

                            <div>

                                <h3>
                                    Anupama
                                </h3>

                                <p>
                                    Senior Recruiter
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                {/* POST JOB */}

                <div className="post-job-box">

                    <h2>Post New Job</h2>

                    <input
                        type="text"
                        placeholder="Job Title"
                        value={jobTitle}
                        onChange={(e) =>
                            setJobTitle(e.target.value)
                        }
                    />

                    <input
                        type="text"
                        placeholder="Company Name"
                        value={companyName}
                        onChange={(e) =>
                            setCompanyName(e.target.value)
                        }
                    />

                    <input
                        type="text"
                        placeholder="Location"
                        value={location}
                        onChange={(e) =>
                            setLocation(e.target.value)
                        }
                    />

                    <button onClick={postJob}>
                        Post Job
                    </button>

                </div>

                {/* HEADER */}

                <div className="dashboard-header">

                    <div>

                        <h1>
                            My Companies
                        </h1>

                        <p>
                            Manage all your company recruitment workspaces
                        </p>

                    </div>

                </div>

                {/* STATS */}

                <div className="stats-grid">

                    <div className="stat-card">

                        <h2>72</h2>

                        <p>Total Open Jobs</p>

                    </div>

                    <div className="stat-card">

                        <h2>543</h2>

                        <p>Total Applications</p>

                    </div>

                    <div className="stat-card">

                        <h2>66</h2>

                        <p>Interviews Scheduled</p>

                    </div>

                    <div className="stat-card">

                        <h2>89%</h2>

                        <p>Hiring Success</p>

                    </div>

                </div>

                {/* COMPANY CARDS */}

                <div className="companies-grid">

                    {companies.map((company, index) => (

                        <div
                            className="company-card"
                            key={index}
                        >

                            <div className="company-top">

                                <img
                                    src={company.image}
                                    alt=""
                                />

                                <div>

                                    <h2>
                                        {company.name}
                                    </h2>

                                    <p>
                                        {company.location}
                                    </p>

                                    <span className="role-badge">
                                        {company.role}
                                    </span>

                                </div>

                            </div>

                            <div className="company-stats">

                                <div>

                                    <h1>
                                        {company.jobs}
                                    </h1>

                                    <p>
                                        Open Jobs
                                    </p>

                                </div>

                                <div>

                                    <h1>
                                        {company.applications}
                                    </h1>

                                    <p>
                                        Applications
                                    </p>

                                </div>

                                <div>

                                    <h1>
                                        {company.interviews}
                                    </h1>

                                    <p>
                                        Interviews
                                    </p>

                                </div>

                                <div>

                                    <h1>
                                        {company.success}
                                    </h1>

                                    <p>
                                        Hiring Rate
                                    </p>

                                </div>

                            </div>

                            <div className="company-actions">

                                <button>
                                    Post Jobs
                                </button>

                                <button>
                                    Candidates
                                </button>

                                <button>
                                    Applications
                                </button>

                                <button>
                                    Interviews
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </div>

    );

}

export default RecruiterDashboard;